// index.js
const express = require('express');
var cors = require('cors')
const routes = require('./src/routes')

const app = express();
const port = 3030;

app.use(cors())
app.use(express.json());
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});

app.use((req, res, next) => {
  next();
});

app.use('/', routes)

