const express = require('express');

const app = express();

const todoRoute = require('./routes/todos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
  res.send('hello');
});

app.use('/public', express.static(__dirname + '/public'));

app.use('/todos', todoRoute);

app.listen(3333, () => {
  console.log('http://localhost:3333');
});
