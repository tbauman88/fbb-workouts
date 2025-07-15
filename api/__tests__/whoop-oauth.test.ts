import axios from 'axios';
import { WHOOP_OAUTH_URL } from '../const';
import handler from '../handlers/whoop-oauth';
import { createMocks } from './helpers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WHOOP OAuth Handler', () => {
  describe('CORS and HTTP Methods', () => {
    it('should handle OPTIONS request', async () => {
      const { req, res } = createMocks({ method: 'OPTIONS' });

      await handler(req, res);

      expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
      expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Methods', 'POST, OPTIONS');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.end).toHaveBeenCalled();
    });

    it('should reject non-POST methods', async () => {
      const { req, res } = createMocks({ method: 'GET' });

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

  describe('Request Validation', () => {
    it('should reject missing required parameters', async () => {
      const { req, res } = createMocks({
        body: { grant_type: 'authorization_code' },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Missing required parameters: grant_type, client_id, client_secret',
        })
      );
    });

    it('should reject invalid grant_type', async () => {
      const { req, res } = createMocks({
        body: {
          grant_type: 'invalid_type',
          client_id: 'test-client',
          client_secret: 'test-secret',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid grant_type. Must be either "authorization_code" or "refresh_token"',
        })
      );
    });

    it('should reject authorization_code without code', async () => {
      const { req, res } = createMocks({
        body: {
          grant_type: 'authorization_code',
          client_id: 'test-client',
          client_secret: 'test-secret',
          redirect_uri: 'https://example.com/callback',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Missing required parameters for authorization_code: code, redirect_uri',
        })
      );
    });

    it('should reject short authorization code', async () => {
      const { req, res } = createMocks({
        body: {
          grant_type: 'authorization_code',
          client_id: 'test-client',
          client_secret: 'test-secret',
          code: 'short',
          redirect_uri: 'https://example.com/callback',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid authorization code format',
        })
      );
    });

    it('should reject invalid redirect_uri format', async () => {
      const { req, res } = createMocks({
        body: {
          grant_type: 'authorization_code',
          client_id: 'test-client',
          client_secret: 'test-secret',
          code: 'valid-auth-code-123',
          redirect_uri: 'not-a-url',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid redirect_uri format',
        })
      );
    });

    it('should reject refresh_token without refresh token', async () => {
      const { req, res } = createMocks({
        body: {
          grant_type: 'refresh_token',
          client_id: 'test-client',
          client_secret: 'test-secret',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Missing required parameter for refresh_token: refresh_token',
        })
      );
    });
  });

  describe('OAuth Token Exchange', () => {
    it('should successfully exchange authorization code', async () => {
      const mockTokenResponse = {
        access_token: 'new-access-token',
        refresh_token: 'new-refresh-token',
        expires_in: 3600,
        token_type: 'Bearer',
      };

      mockedAxios.post.mockResolvedValueOnce({
        data: mockTokenResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        body: {
          grant_type: 'authorization_code',
          client_id: 'test-client',
          client_secret: 'test-secret',
          code: 'valid-auth-code-123',
          redirect_uri: 'https://example.com/callback',
          scope: 'read:cycles read:recovery',
        },
      });

      await handler(req, res);

      expect(mockedAxios.post).toHaveBeenCalledWith(
        WHOOP_OAUTH_URL,
        expect.any(URLSearchParams),
        expect.objectContaining({
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'User-Agent': 'BaumanLift/1.0',
          },
          timeout: 10000,
        })
      );

      // Verify URLSearchParams content
      const callArgs = mockedAxios.post.mock.calls[0];
      const params = callArgs[1] as URLSearchParams;
      expect(params.get('grant_type')).toBe('authorization_code');
      expect(params.get('code')).toBe('valid-auth-code-123');
      expect(params.get('scope')).toBe('read:cycles read:recovery');

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockTokenResponse);
    });

    it('should successfully refresh token', async () => {
      const mockTokenResponse = {
        access_token: 'refreshed-access-token',
        refresh_token: 'refreshed-refresh-token',
        expires_in: 3600,
        token_type: 'Bearer',
      };

      mockedAxios.post.mockResolvedValueOnce({
        data: mockTokenResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        body: {
          grant_type: 'refresh_token',
          client_id: 'test-client',
          client_secret: 'test-secret',
          refresh_token: 'valid-refresh-token-123',
        },
      });

      await handler(req, res);

      const callArgs = mockedAxios.post.mock.calls[0];
      const params = callArgs[1] as URLSearchParams;
      expect(params.get('grant_type')).toBe('refresh_token');
      expect(params.get('refresh_token')).toBe('valid-refresh-token-123');

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockTokenResponse);
    });

    it('should handle invalid credentials error', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: {
          error: 'invalid_client',
          error_description: 'Client authentication failed',
        },
        status: 401,
        statusText: 'Unauthorized',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        body: {
          grant_type: 'authorization_code',
          client_id: 'invalid-client',
          client_secret: 'invalid-secret',
          code: 'valid-auth-code-123',
          redirect_uri: 'https://example.com/callback',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Client authentication failed',
          code: 'OAUTH_ERROR',
        })
      );
    });

    it('should handle timeout errors', async () => {
      const timeoutError = new Error('timeout of 10000ms exceeded') as Error & { code: string };
      timeoutError.code = 'ECONNABORTED';
      mockedAxios.post.mockRejectedValueOnce(timeoutError);
      mockedAxios.isAxiosError = jest.fn().mockReturnValue(true) as unknown as jest.MockedFunction<typeof axios.isAxiosError>;

      const { req, res } = createMocks({
        body: {
          grant_type: 'refresh_token',
          client_id: 'test-client',
          client_secret: 'test-secret',
          refresh_token: 'valid-refresh-token-123',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(408);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'OAuth request timeout - WHOOP API took too long to respond',
          code: 'OAUTH_ERROR',
        })
      );
    });

    it('should handle generic OAuth errors', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        data: {
          error: 'server_error',
          error_description: 'The authorization server encountered an unexpected condition',
        },
        status: 500,
        statusText: 'Internal Server Error',
        headers: {},
        config: {},
      });

      const { req, res } = createMocks({
        body: {
          grant_type: 'authorization_code',
          client_id: 'test-client',
          client_secret: 'test-secret',
          code: 'valid-auth-code-123',
          redirect_uri: 'https://example.com/callback',
        },
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'OAuth request failed',
          code: 'OAUTH_ERROR',
          timestamp: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
        })
      );
    });
  });
}); 
