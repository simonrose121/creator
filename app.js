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

// get POST parameter database
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json '}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app);

app.listen(port);

// expose app
exports = module.exports = app;
