const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;


  if (username === 'admin' && password === 'password') {
    res.send('<h1>Login Successful!</h1>');
  } else {
    res.send('<h1>Invalid Credentials</h1>');
  }
});


