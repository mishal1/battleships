var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var Game = require('./src/game');
var Ship = require('./src/ship');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

var ship = new Ship(1);
var fleet = [ship, ship];
var game = new Game(fleet);

io.on('connection', function(socket){
  console.log('connected')
});

var route = require('./controllers/routes.js');
route.controller(app, game, fleet, ship, io);


http.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = http;
