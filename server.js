const express = require('express');
const app = express();
app.use(express.json()); 


const port = process.env.PORT || 3000;

app.listen(port, () => {
  return console.log('API executando na porta ' + port);
});

const routes = require('./server/routes/index');
app.use(routes);