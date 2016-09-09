var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var environment = app.get('env');
var port = process.env.PORT || 3000;

var databaseUri = require('./config/db')(environment);
mongoose.connect(databaseUri);

var routes = require('./config/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(port, function() {
  console.log("Express is running on port " + port);
});

module.exports = app;