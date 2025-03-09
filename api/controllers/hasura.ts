import { Request, Response } from "express";
import fetch from "node-fetch";

enum WHOOP_EVENT_TYPES {
  RECOVERY_UPDATED = 'recovery.updated',
  RECOVERY_DELETED = 'recovery.deleted',
  WORKOUT_UPDATED = 'workout.updated',
  WORKOUT_DELETED = 'workout.deleted',
  SLEEP_UPDATED = 'sleep.updated',
  SLEEP_DELETED = 'sleep.deleted',
}

export const postWebhook = async (req: Request, res: Response): Promise<any> => {
  const HASURA_WEBHOOK_URL = process.env.HASURA_WEBHOOK_URL;
  const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;

  const WHOOP_INTEGRATION_ID = '72ff3642-bbd5-48f9-951e-8fe2a0e4b43f';

  if (!HASURA_WEBHOOK_URL || !HASURA_ADMIN_SECRET) {
    res.status(500).json({ error: "Hasura configuration missing" });
    return;
  }

  if (req.body.type !== WHOOP_EVENT_TYPES.WORKOUT_UPDATED) {
    res.status(200).json({ message: "✅ Webhook received and ignored" });
    return;
  }

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
          integration_id: WHOOP_INTEGRATION_ID,
          payload: req.body,
          processed: false,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error forwarding to Hasura:", data);
      return res.status(response.status).json({ error: "Failed to forward webhook to Hasura", response: data });
    }

    console.log("✅ Webhook successfully sent to Hasura:", data);
    res.status(200).json({ message: "Webhook received and forwarded", hasura_response: data });
  } catch (error) {
    console.error("❌ Error processing webhook:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}; 
