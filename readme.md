#Test URLs After Deploy

Webhook Endpoint (for Facebook):
https://webhook-vercel-psi.vercel.app/webhook
Live UI Console (view logs):
https://webhook-vercel-psi.vercel.app/console


#🧪 Test Webhook Manually

curl -X POST https://webhook-vercel-psi.vercel.app/webhook \
-H "Content-Type: application/json" \
-d '{"event":"test","source":"manual","value":123}'

