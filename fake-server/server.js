const parser = require('body-parser');
const express = require('express');
const http = require('http');

const PORT = 5279;

const log = message => console.log('FAKE SERVER: ' + message);

let mocks = {};

const server = express();

server.use(parser.json());

server.get('*', (req, res, next) => {
  log(`${req.method} ${req.originalUrl}`);
  next();
});

server.get('/activity', (req, res) => {
  if (mocks.activity) {
    res.send(mocks.activity);
  }
  res.sendStatus(500);
});

const app = http.createServer(server);

const start = () =>
  new Promise((resolve, reject) => {
    app.on('error', error => {
      log(error);
      reject(error);
    });

    app.listen(PORT, () => {
      log(`listening on port ${PORT}`);
      log(`running on ${__dirname}`);
      resolve();
    });
  });

const stop = () => app.close();

function mockActivityResponse(val) {
  mocks.activity = val;
}

function resetMocks() {
  mocks = {};
}

module.exports = {
  resetMocks,
  mockActivityResponse,
  stop,
  start,
  log,
};
