import { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

/**
 * IMPORTANT: Before this webhook can receive events, you must register it with Whoop:
 * 
 * 1. Go to https://developer.whoop.com
 * 2. Navigate to your app settings
 * 3. Add webhook URL: https://bauman-lift.vercel.app/api/webhook
 * 4. Subscribe to desired events (workout.updated, recovery.updated, etc.)
 * 
 * Or use the Whoop API to register programmatically:
 * POST https://api.prod.whoop.com/developer/v1/webhook
 * Headers: Authorization: Bearer YOUR_ACCESS_TOKEN
 * Body: {
 *   "url": "https://bauman-lift.vercel.app/api/webhook",
 *   "enabled": true
 * }
 */

enum WHOOP_EVENT_TYPES {
  RECOVERY_UPDATED = 'recovery.updated',
  RECOVERY_DELETED = 'recovery.deleted',
  WORKOUT_UPDATED = 'workout.updated',
  WORKOUT_DELETED = 'workout.deleted',
  SLEEP_UPDATED = 'sleep.updated',
  SLEEP_DELETED = 'sleep.deleted',
}

function verifySignature(req: VercelRequest): boolean {
  console.log("🔐 Starting signature verification...");

  const signature = req.headers['x-whoop-signature'] as string;
  const timestamp = req.headers['x-whoop-signature-timestamp'] as string;
  const secret = process.env.WHOOP_CLIENT_SECRET;

  console.log("Signature verification details:", {
    signature: signature ? "✅ Present" : "❌ Missing",
    timestamp: timestamp ? "✅ Present" : "❌ Missing",
    secret: secret ? "✅ Set" : "❌ Missing",
    bodyLength: JSON.stringify(req.body).length,
  });

  if (!signature || !secret || !timestamp) {
    console.error("❌ Missing required signature components");
    return false;
  }

  try {
    const payload = timestamp + JSON.stringify(req.body);
    console.log("Payload for signature:", payload.substring(0, 100) + "...");

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("base64");

    if (signature !== expectedSignature) {
      console.error("❌ Invalid Signature!");
      console.error("Expected:", expectedSignature);
      console.error("Received:", signature);
      return false;
    }

    console.log("✅ Signature Verified!");
    return true;
  } catch (error) {
    console.error("Error verifying signature:", error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-whoop-signature, x-whoop-signature-timestamp');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }


  const HASURA_WEBHOOK_URL = process.env.HASURA_WEBHOOK_URL;
  const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

  console.log("🚀 Webhook received!", {
    headers: JSON.stringify(req.headers, null, 2),
    body: JSON.stringify(req.body, null, 2),
    query: JSON.stringify(req.query, null, 2),
  });

  if (!HASURA_WEBHOOK_URL || !HASURA_ADMIN_SECRET) {
    console.error("❌ Hasura configuration missing", {
      HASURA_WEBHOOK_URL: HASURA_WEBHOOK_URL ? "✅ Set" : "❌ Missing",
      HASURA_ADMIN_SECRET: HASURA_ADMIN_SECRET ? "✅ Set" : "❌ Missing",
    });
    return res.status(500).json({ error: "Hasura configuration missing" });
  }

  if (!verifySignature(req)) {
    return res.status(403).json({ error: "Invalid signature" });
  }

  console.log("Event type received:", req.body.type);
  console.log("Expected event types:", Object.values(WHOOP_EVENT_TYPES));

  if (req.body.type !== WHOOP_EVENT_TYPES.WORKOUT_UPDATED) {
    console.log("⚠️ Event type not handled, ignoring:", req.body.type);
    return res.status(200).json({ message: "✅ Webhook received and ignored" });
  }

  console.log("✅ Processing WORKOUT_UPDATED event");

  try {
    const response = await fetch(HASURA_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET
      },
      body: JSON.stringify({
        object: {
          event: req.body.type,
          payload: req.body,
          processed: false,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error forwarding to Hasura:", data);
      return res.status(response.status).json({
        error: "Failed to forward webhook to Hasura",
        response: data
      });
    }

    console.log("✅ Webhook successfully sent to Hasura:", data);
    return res.status(200).json({
      message: "Webhook received and forwarded",
      hasura_response: data
    });
  } catch (error) {
    console.error("❌ Error processing webhook:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
