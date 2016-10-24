var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname });
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
