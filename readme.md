#Test URLs After Deploy

Webhook Endpoint (for Facebook):
https://your-project.vercel.app/webhook
Live UI Console (view logs):
https://your-project.vercel.app/console


#🧪 Test Webhook Manually

curl -X POST https://your-project.vercel.app/webhook \
-H "Content-Type: application/json" \
-d '{"event":"test","source":"manual","value":123}'

