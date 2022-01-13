const express = require('express');
const bodyParser = require('body-parser');
const pingRouter = require('./middlewares/ping');
const helloRouter = require('./middlewares/hello')

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRouter);

app.use('/hello', helloRouter);

app.listen(port, () => {
  console.log(`Aplicação ouvindo na porta ${port}`);
})
