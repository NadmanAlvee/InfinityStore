import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { clerkWebhookHandler } from "./webhooks/clerk";

const app = express();

const rawJson = express.raw({ type: "application/json", limit: "1mb" });
// requires raw json
app.post("/webhooks/clerk", rawJson, (req, res) => {
  void clerkWebhookHandler(req, res);
});

app.use(express.json()); // parses json data
app.use(cors());
app.use(clerkMiddleware());

app.use("/health", (_req, res) => {
  res.status(200).send("Ok");
});

app.listen(3001, () => {
  console.log(`listening on port ${3001}`);
});
