const express = require('express');
const app = express();
const port=3002;

app.get('/app2', function(req, res, next) {
  res.send('This is the application2');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log('server is listening on '+port)
});
