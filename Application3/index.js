const express = require('express');
const app = express();
const port=3003;

app.get('/app3', function(req, res, next) {
  res.send('This is the application3');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log('server is listening on '+port)
});
