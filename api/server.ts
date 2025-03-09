import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { verify } from "./middlewares/signature";
import { postWebhook } from "./controllers/hasura";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.API_PORT || '9999';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook", verify, postWebhook);

app.listen(PORT, () => {
  console.log(`🚀 Webhook server running on http://localhost:${PORT}`);
});
