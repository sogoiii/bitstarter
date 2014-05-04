var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
var path = require('path');







app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(request, response) {
  // response.send('Hello World!');
  var out = fs.readFileSync('index.html');
  response.send(out.toString())
});

var port = process.env.PORT || 3000;
app
.listen(port, function() {
  console.log("Listening on " + port);
});
