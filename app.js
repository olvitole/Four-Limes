var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var stripe = require("stripe")("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

var environment = app.get('env');
var port = process.env.PORT || 3000;

var routes = require('./config/routes');

mongoose.Promise = require('bluebird');

var databaseUri = require('./config/db')(environment);
mongoose.connect(databaseUri);

if('test' !== environment) {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', routes);

app.listen(port, function() {
  console.log("FourLimes is up on port " + port);
});

module.exports = app;