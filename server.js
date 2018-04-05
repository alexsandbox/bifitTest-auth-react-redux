const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/auth', (req, res) => {
  console.log('/api/auth', req.body);
  if (req.body.name === 'name' && req.body.password === 'password') {
    res.status(200).json({ status: 'success' });
  } else {
    res.status(401).json({ status: 'fail', error: 'Неверный логин или пароль' });
  }
});

const httpServer = http.createServer(app);

const PORT = 3001;
const HOST = 'localhost';

httpServer.listen(PORT, HOST);
console.log(`Node.js started for module bifit with NODE_ENV = ${NODE_ENV} on http://${HOST}:${PORT}`);
