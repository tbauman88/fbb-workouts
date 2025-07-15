import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';
import { setCorsHeaders, createTimeoutController, validateMethod, createErrorResponse, logger } from '../_utils';
import { SECURITY_MAX_TIMESTAMP_DIFF, WHOOP_EVENT_TYPES } from '../const';

function validateEnvironment(): { isValid: boolean; error?: string } {
  const HASURA_WEBHOOK_URL = process.env.HASURA_WEBHOOK_URL;
  const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;
  const WHOOP_CLIENT_SECRET = process.env.WHOOP_CLIENT_SECRET;

  if (!HASURA_WEBHOOK_URL || !HASURA_ADMIN_SECRET) {
    return {
      isValid: false,
      error: "Hasura configuration missing"
    };
  }

  if (!WHOOP_CLIENT_SECRET) {
    return {
      isValid: false,
      error: "WHOOP client secret missing"
    };
  }

  return { isValid: true };
}

function verifySignature(req: VercelRequest): { isValid: boolean; error?: string } {
  console.log("🔐 Starting signature verification...");

  const signature = req.headers['x-whoop-signature'] as string;
  const timestamp = req.headers['x-whoop-signature-timestamp'] as string;
  const secret = process.env.WHOOP_CLIENT_SECRET;

  if (!signature || !secret || !timestamp) {
    return {
      isValid: false,
      error: "Missing required signature components"
    };
  }

  try {
    // Validate timestamp to prevent replay attacks
    const timestampMs = parseInt(timestamp) * 1000;
    const now = Date.now();

    if (Math.abs(now - timestampMs) > SECURITY_MAX_TIMESTAMP_DIFF) {
      return {
        isValid: false,
        error: "Request timestamp too old or too far in future"
      };
    }

    const payload = timestamp + JSON.stringify(req.body);
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("base64");

    // Use constant-time comparison to prevent timing attacks
    const isSignatureValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );

    if (!isSignatureValid) {
      return {
        isValid: false,
        error: "Invalid signature"
      };
    }

    console.log("✅ Signature verified successfully");
    return { isValid: true };
  } catch (error) {
    console.error("Error verifying signature:", error);
    return {
      isValid: false,
      error: "Signature verification failed"
    };
  }
}

async function forwardToHasura(eventType: string, payload: unknown): Promise<unknown> {
  const HASURA_WEBHOOK_URL = process.env.HASURA_WEBHOOK_URL!;
  const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET!;

  const { controller, cleanup } = createTimeoutController(10000);

  try {
    const response = await fetch(HASURA_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET
      },
      body: JSON.stringify({
        object: {
          event: eventType,
          payload: payload,
          processed: false,
        }
      }),
      signal: controller.signal
    });

    cleanup();

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Hasura request failed: ${response.status} ${data?.message || response.statusText}`);
    }

    return data;
  } catch (error) {
    cleanup();
    throw error;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res, ['POST', 'OPTIONS']);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const methodValidation = validateMethod(req.method, ['POST']);
  if (!methodValidation.isValid) {
    return res.status(405).json(methodValidation.error);
  }

  // Validate environment configuration
  const envValidation = validateEnvironment();
  if (!envValidation.isValid) {
    logger.error("Environment validation failed", envValidation.error);
    return res.status(500).json(createErrorResponse("Server configuration error", "ENV_VALIDATION_FAILED"));
  }

  // Verify webhook signature
  const signatureValidation = verifySignature(req);
  if (!signatureValidation.isValid) {
    logger.error("Signature validation failed", signatureValidation.error);
    return res.status(403).json(createErrorResponse("Invalid request signature", "SIGNATURE_INVALID"));
  }

  const eventType = req.body?.type;
  logger.info("Processing webhook event", { eventType });

  // Only process workout events for now
  if (eventType !== WHOOP_EVENT_TYPES.WORKOUT_UPDATED) {
    logger.warn("Event type not handled, ignoring", { eventType });
    return res.status(200).json({ message: "Webhook received and ignored" });
  }

  try {
    const hasuraResponse = await forwardToHasura(eventType, req.body);

    logger.success("Webhook successfully processed and forwarded to Hasura");
    return res.status(200).json({
      message: "Webhook received and forwarded",
      hasura_response: hasuraResponse
    });
  } catch (error) {
    logger.error("Error processing webhook", error);
    return res.status(500).json(createErrorResponse(
      "Failed to process webhook",
      "WEBHOOK_PROCESSING_FAILED",
      { message: error instanceof Error ? error.message : "Unknown error" }
    ));
  }
}
