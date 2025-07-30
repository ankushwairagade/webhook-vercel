// pages/api/webhook.js

export default function handler(req, res) {
  const VERIFY_TOKEN = "ankush_wairagade"; // Match with Facebook verify token

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("✅ Webhook verified");
      res.status(200).send(challenge);
    } else {
      console.warn("❌ Verification failed");
      res.status(403).send("Forbidden");
    }
  } else if (req.method === "POST") {
    console.log("📩 Webhook Event:", JSON.stringify(req.body, null, 2));
    res.status(200).end();
  } else {
    res.status(405).end();
  }
}
