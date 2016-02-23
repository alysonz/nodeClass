var express = require('express');
var app = express();
var home = require('./home');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send(home);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
