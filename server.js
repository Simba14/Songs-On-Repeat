var express = require('express');
var app = express();
var path = require('path');
var http = require("http").Server(app);
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

// Create an HTTP server to handle responses
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
