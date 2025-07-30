import { addLog } from '../../lib/logStore.js';

const VERIFY_TOKEN = 'my_verify_token'; // You can change this

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('✅ Webhook verified!');
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send('Verification failed');
    }
  }

  if (req.method === 'POST') {
    console.log('📥 Webhook received:', req.body);
    addLog(req.body);
    return res.status(200).json({ status: 'received' });
  }

  return res.status(405).send('Method Not Allowed');
}
