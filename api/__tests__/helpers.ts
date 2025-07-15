import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

export const createMocks = (overrides: Partial<VercelRequest> = {}) => {
  const req: Partial<VercelRequest> = {
    method: 'POST',
    headers: {},
    body: {},
    ...overrides,
  };

  const res: Partial<VercelResponse> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    end: jest.fn().mockReturnThis(),
    setHeader: jest.fn().mockReturnThis(),
  };

  return { req: req as VercelRequest, res: res as VercelResponse };
}

export const generateWebhookSignature = (body: unknown, timestamp: string): string => {
  const secret = process.env.WHOOP_CLIENT_SECRET!;
  const payload = timestamp + JSON.stringify(body);

  return crypto.createHmac('sha256', secret).update(payload).digest('base64');
}
