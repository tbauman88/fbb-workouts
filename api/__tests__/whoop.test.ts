import { VercelRequest } from '@vercel/node';
import axios from 'axios';
import { ALLOWED_ENDPOINTS, WHOOP_API_URL } from '../const';
import handler from '../handlers/whoop';
import { createMocks as createVercelMocks } from './helpers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

function createMocks(overrides: Partial<VercelRequest> = {}) {
  return createVercelMocks({
    method: 'GET',
    headers: {},
    query: {},
    ...overrides,
  });
}

describe('WHOOP API Handler', () => {
  describe('CORS and HTTP Methods', () => {
    it('should handle OPTIONS request', async () => {
      const { req, res } = createMocks({ method: 'OPTIONS' });

      await handler(req, res);

      expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
      expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Methods', 'GET, OPTIONS');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.end).toHaveBeenCalled();
    });

    it('should reject non-GET methods', async () => {
      const { req, res } = createMocks({ method: 'POST' });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(405);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Method not allowed',
          code: 'METHOD_NOT_ALLOWED',
        })
      );
    });
  });

  describe('Authorization Validation', () => {
    it('should reject missing authorization header', async () => {
      const { req, res } = createMocks({
        query: { endpoint: '/cycle' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Missing authorization header',
        })
      );
    });

    it('should reject invalid authorization format', async () => {
      const { req, res } = createMocks({
        headers: { authorization: 'InvalidFormat token123' },
        query: { endpoint: '/cycle' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid authorization header format. Expected: Bearer <token>',
        })
      );
    });

    it('should reject short tokens', async () => {
      const { req, res } = createMocks({
        headers: { authorization: 'Bearer short' },
        query: { endpoint: '/cycle' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid or missing access token',
        })
      );
    });
  });

  describe('Endpoint Validation', () => {
    it('should reject missing endpoint', async () => {
      const { req, res } = createMocks({
        headers: { authorization: 'Bearer valid-token-123456' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Missing or invalid endpoint parameter',
          code: 'INVALID_ENDPOINT',
          details: expect.objectContaining({
            available_endpoints: ALLOWED_ENDPOINTS,
          }),
          timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        })
      );
    });

    it('should reject invalid endpoint', async () => {
      const { req, res } = createMocks({
        headers: { authorization: 'Bearer valid-token-123456' },
        query: { endpoint: '/invalid/endpoint' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: expect.stringContaining('Invalid endpoint'),
        })
      );
    });
  });

  describe('WHOOP API Integration', () => {
    const validToken = 'valid-token-123456';

    Object.entries(ALLOWED_ENDPOINTS).forEach(([endpoint, description]) => {
      it(`should successfully fetch ${description} from ${endpoint}`, async () => {
        const mockData = { data: `${endpoint} data`, meta: { total: 1 } };
        mockedAxios.get.mockResolvedValueOnce({
          data: mockData,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        });

        const { req, res } = createMocks({
          headers: { authorization: `Bearer ${validToken}` },
          query: { endpoint },
        });

        await handler(req, res);

        expect(mockedAxios.get).toHaveBeenCalledWith(
          `${WHOOP_API_URL}${endpoint}`,
          expect.objectContaining({
            headers: {
              'Authorization': `Bearer ${validToken}`,
              'Accept': 'application/json',
              'User-Agent': 'BaumanLift/1.0',
            },
            timeout: 10000,
          })
        );

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockData);
      });
    });

    it('should handle 401 unauthorized errors', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { message: 'Invalid token' },
        status: 401,
        statusText: 'Unauthorized',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        headers: { authorization: `Bearer ${validToken}` },
        query: { endpoint: '/cycle' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid token',
          code: 'WHOOP_API_ERROR',
          timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        })
      );
    });

    it('should handle 429 rate limit errors', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { message: 'Rate limit exceeded' },
        status: 429,
        statusText: 'Too Many Requests',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        headers: { authorization: `Bearer ${validToken}` },
        query: { endpoint: '/recovery' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(429);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Rate limit exceeded',
          code: 'WHOOP_API_ERROR',
          timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        })
      );
    });

    it('should handle request timeouts', async () => {
      const timeoutError = new Error('timeout of 10000ms exceeded') as Error & { code: string };
      timeoutError.code = 'ECONNABORTED';
      mockedAxios.get.mockRejectedValueOnce(timeoutError);
      mockedAxios.isAxiosError = jest.fn().mockReturnValue(true) as unknown as jest.MockedFunction<typeof axios.isAxiosError>;

      const { req, res } = createMocks({
        headers: { authorization: `Bearer ${validToken}` },
        query: { endpoint: '/activity/sleep' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(408);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Request timeout - WHOOP API took too long to respond',
          code: 'WHOOP_API_ERROR',
        })
      );
    });

    it('should handle generic API errors', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: { error: 'Internal server error' },
        status: 500,
        statusText: 'Internal Server Error',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        headers: { authorization: `Bearer ${validToken}` },
        query: { endpoint: '/activity/workout' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: expect.any(String),
          code: 'WHOOP_API_ERROR',
          details: expect.objectContaining({
            endpoint: '/activity/workout',
          }),
        })
      );
    });

    it('should handle network errors', async () => {
      const networkError = new Error('Network Error');
      mockedAxios.get.mockRejectedValueOnce(networkError);
      mockedAxios.isAxiosError = jest.fn().mockReturnValue(false) as unknown as jest.MockedFunction<typeof axios.isAxiosError>;

      const { req, res } = createMocks({
        headers: { authorization: `Bearer ${validToken}` },
        query: { endpoint: '/cycle' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Network Error',
          code: 'WHOOP_API_ERROR',
        })
      );
    });
  });
}); 
