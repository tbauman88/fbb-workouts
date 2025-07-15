import { HttpStatusCode } from 'axios';
import { SECURITY_MAX_TIMESTAMP_DIFF, WHOOP_EVENT_TYPES } from '../const';
import handler from '../handlers/webhook';
import { createMocks, generateWebhookSignature } from './helpers';

global.fetch = jest.fn();

describe('Webhook Handler', () => {
  describe('CORS and HTTP Methods', () => {
    it('should handle OPTIONS request', async () => {
      const { req, res } = createMocks({ method: 'OPTIONS' });

      await handler(req, res);

      expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
      expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Methods', 'POST, OPTIONS');
      expect(res.status).toHaveBeenCalledWith(HttpStatusCode.Ok);
      expect(res.end).toHaveBeenCalled();
    });

    it('should reject non-POST methods', async () => {
      const { req, res } = createMocks({ method: 'GET' });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(HttpStatusCode.MethodNotAllowed);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Method not allowed',
          code: 'METHOD_NOT_ALLOWED',
        })
      );
    });
  });

  describe('Environment Validation', () => {
    it('should fail when HASURA_WEBHOOK_URL is missing', async () => {
      // TODO: Fix this test
      const originalUrl = process.env.HASURA_WEBHOOK_URL;
      delete process.env.HASURA_WEBHOOK_URL;

      const { req, res } = createMocks();

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(HttpStatusCode.InternalServerError);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Server configuration error',
          code: 'ENV_VALIDATION_FAILED',
        })
      );

      process.env.HASURA_WEBHOOK_URL = originalUrl;
    });
  });

  describe('Signature Verification', () => {
    const validBody = { type: WHOOP_EVENT_TYPES.WORKOUT_UPDATED, data: { id: '123' } };
    const validTimestamp = Math.floor(Date.now() / 1000).toString();

    it('should accept valid signature', async () => {
      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': generateWebhookSignature(validBody, validTimestamp),
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body: validBody,
      });

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(HttpStatusCode.Ok);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Webhook received and forwarded',
        })
      );
    });

    it('should reject missing signature', async () => {
      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body: validBody,
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(HttpStatusCode.Forbidden);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid request signature',
          code: 'SIGNATURE_INVALID',
        })
      );
    });

    it('should reject invalid signature', async () => {
      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': 'invalid-signature',
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body: validBody,
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(HttpStatusCode.Forbidden);
    });

    it('should reject old timestamp (replay attack)', async () => {
      const oldTimestamp = Math.floor((Date.now() - SECURITY_MAX_TIMESTAMP_DIFF - 1000) / 1000).toString();
      const signature = generateWebhookSignature(validBody, oldTimestamp);

      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': signature,
          'x-whoop-signature-timestamp': oldTimestamp,
        },
        body: validBody,
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Invalid request signature',
          code: 'SIGNATURE_INVALID',
        })
      );
    });
  });

  describe('Event Processing', () => {
    const validTimestamp = Math.floor(Date.now() / 1000).toString();

    it('should process WORKOUT_UPDATED events', async () => {
      const body = { type: WHOOP_EVENT_TYPES.WORKOUT_UPDATED, data: { id: '123' } };
      const signature = generateWebhookSignature(body, validTimestamp);

      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': signature,
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body,
      });

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: 'webhook-123', success: true }),
      });

      await handler(req, res);

      expect(global.fetch).toHaveBeenCalledWith(
        process.env.HASURA_WEBHOOK_URL,
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
          },
          body: JSON.stringify({
            object: {
              event: WHOOP_EVENT_TYPES.WORKOUT_UPDATED,
              payload: body,
              processed: false,
            },
          }),
        })
      );

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Webhook received and forwarded',
        hasura_response: { id: 'webhook-123', success: true },
      });
    });

    it('should ignore non-WORKOUT_UPDATED events', async () => {
      const body = { type: WHOOP_EVENT_TYPES.RECOVERY_UPDATED, data: { id: '123' } };
      const signature = generateWebhookSignature(body, validTimestamp);

      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': signature,
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body,
      });

      await handler(req, res);

      expect(global.fetch).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Webhook received and ignored',
      });
    });
  });

  describe('Hasura Integration', () => {
    const validTimestamp = Math.floor(Date.now() / 1000).toString();
    const validBody = { type: WHOOP_EVENT_TYPES.WORKOUT_UPDATED, data: { id: '123' } };

    it('should handle Hasura API errors', async () => {
      const signature = generateWebhookSignature(validBody, validTimestamp);
      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': signature,
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body: validBody,
      });

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        json: async () => ({ message: 'Invalid webhook data' }),
      });

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Failed to process webhook',
          code: 'WEBHOOK_PROCESSING_FAILED',
        })
      );
    });

    it('should handle network timeouts', async () => {
      const signature = generateWebhookSignature(validBody, validTimestamp);
      const { req, res } = createMocks({
        headers: {
          'x-whoop-signature': signature,
          'x-whoop-signature-timestamp': validTimestamp,
        },
        body: validBody,
      });

      const abortError = new Error('Aborted');
      abortError.name = 'AbortError';
      (global.fetch as jest.Mock).mockRejectedValueOnce(abortError);

      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Failed to process webhook',
          code: 'WEBHOOK_PROCESSING_FAILED',
          details: expect.objectContaining({
            message: 'Aborted',
          }),
        })
      );
    });
  });
}); 
