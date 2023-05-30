/* istanbul ignore file */
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let count = 0;

wss.on('connection', ws => {
  // Send the current count to the client
  ws.send(count.toString());

  ws.on('message', message => {
    if (message === 'increment') {
      count++;
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(count.toString());
        }
      });
    }
  });
});

server.listen(8080, () => {
  console.log('Server started on port 8080');
});