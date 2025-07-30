import { getLogs } from '../lib/logStore.js';

export async function getServerSideProps() {
  return {
    props: {
      logs: getLogs()
    }
  };
}

export default function ConsolePage({ logs }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', background: '#111', color: '#0f0' }}>
      <h2>🖥 Webhook Console</h2>
      <p>Latest webhook logs (max 100)</p>
      <hr />
      {logs.length === 0 && <p>No logs received yet.</p>}
      {logs.map((log, i) => (
        <pre key={i} style={{ background: '#222', padding: '10px', marginBottom: '10px' }}>
          <strong>{new Date(log.timestamp).toLocaleString()}</strong>
          {'\n'}
          {JSON.stringify(log.entry, null, 2)}
        </pre>
      ))}
    </div>
  );
}
