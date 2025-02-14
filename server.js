import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const server = createServer();
const wss = new WebSocketServer({ server });

let activeConnections = 0;

wss.on('connection', (ws) => {
  activeConnections++;

  wss.clients.forEach((client) => {
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify({ activeConnections }));
    }
  });

  ws.on('close', () => {
    activeConnections--;
    
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(JSON.stringify({ activeConnections }));
      }
    });
  });
});

server.listen(3000, () => {
  console.log('WebSocket server is running on ws://localhost:3000');
});