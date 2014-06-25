
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes.js');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var flash    = require('connect-flash');
var SessionStore = require("session-mongoose")(express);

var store = new SessionStore({
    url: "mongodb://localhost/session",
    interval: 120000 // expiration check worker run interval in millisec (default: 60000)
});


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('ssxxzzyyabab'));
app.use(express.session({
  	secret : 'ssxxzzyyabab',
    store: store,
    cookie: { maxAge: 900000 } // expire session in 15 min or 900 seconds
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
routes(app);