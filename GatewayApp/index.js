const express = require('express');
const app = express();
const port=3000;

const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const endpoints={
  app1:'http://localhost:3001',
  app2:'http://localhost:3002',
  app3:'http://localhost:3003'
};


app.get('/', function(req, res, next) {
  res.send('This is the API Gateway');
});

app.all("/app1/*", function(req, res) {
    console.log('Requesting to app1');
    apiProxy.web(req, res, {target: endpoints.app1});
});

app.all("/app2/*", function(req, res) {
    console.log('Requesting to app2');
    apiProxy.web(req, res, {target: endpoints.app2});
});

app.all("/app3/*", function(req, res) {
    console.log('Requesting to app3');
    apiProxy.web(req, res, {target: endpoints.app3});
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log('server is listening on '+port)
});
