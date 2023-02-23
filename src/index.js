const http = require('node:http');
const assert = require('node:assert');

const config = require('./config');

throw(new Error('a'));
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end(`${1}`);
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
