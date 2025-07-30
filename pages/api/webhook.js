export default function handler(req, res) {
  const VERIFY_TOKEN = "ankush_wairagade"; // <- set this same token in Facebook dashboard

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verified successfully.");
      res.status(200).send(challenge);
    } else {
      console.error("Webhook verification failed.");
      res.status(403).send("Forbidden");
    }
  } else if (req.method === "POST") {
    // Facebook sends actual webhooks here
    console.log("Webhook event:", req.body);
    res.sendStatus(200);
  } else {
    res.sendStatus(405); // Method not allowed
  }
}
