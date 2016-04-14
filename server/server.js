var express = require('express');
var bodyParser= require('body-parser')
var path = require('path');
var app = express();


app.use(express.static('client'));

app.use(bodyParser.json());


app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
});


var PORT = process.env.PORT || 3000;

app.listen(PORT);
