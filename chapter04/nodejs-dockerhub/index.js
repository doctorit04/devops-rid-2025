const express = require('express');
const app = express();
const port = 3002;
const users = require('./users.json');

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});