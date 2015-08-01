// includes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config files
var db = require('./config/db');
var port = process.env.PORT || 8080;

// connect to database
mongoose.connect(db.url);

// set view engine
app.set('view engine', 'jade');

// get POST parameter database
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json '}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// routes
app.get('/', function(req, res) {
  res.render(__dirname + '/client/views/index.jade');
})

app.listen(port);

// expose app
exports = module.exports = app;
