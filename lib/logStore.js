const logs = [];

export function addLog(entry) {
  logs.unshift({ timestamp: Date.now(), entry });
  if (logs.length > 100) logs.pop();
}

export function getLogs() {
  return logs;
}
