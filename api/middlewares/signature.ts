import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

export const verify = (req: Request, res: Response, next: NextFunction): void => {
  const signature = req.get("x-whoop-signature");
  const timestamp = req.get("x-whoop-signature-timestamp");
  const secret = process.env.WHOOP_CLIENT_SECRET;

  if (!signature || !secret || !timestamp) {
    res.status(401).send("Missing signature, timestamp, or secret.");
    return;
  }

  try {
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(timestamp + JSON.stringify(req.body))
      .digest("base64");

    if (signature !== expectedSignature) {
      console.error("❌ Invalid Signature!");
      res.status(403).send("Invalid signature.");
      return;
    }

    console.log("✅ Signature Verified!");
    next();
  } catch (error) {
    console.error("Error verifying signature:", error);
    res.status(500).send("Internal Server Error");
  }
}; 
