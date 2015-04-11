var express = require('express');
var mongoose = require("mongoose");
var path = require('path');

mongoose.connect("mongodb://localhost:27017/");
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendfile("./public/index.html");
});

app.listen(3001);