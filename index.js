const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/user/:username', (req, res) => {
  const data = {
    username: req.params.username,
    hobbies: ['footbal', 'skate', 'basketball'],
  };

  res.render('user', data);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});
