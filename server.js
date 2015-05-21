var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

var Player = require('./src/player');


var onlineUsers = [];

io.on('connection', function(socket){

  var player;
  var games = {};

  socket.on('add user', function(name){
    player = new Player(name, socket.id)
    onlineUsers.push(player);
    console.log(onlineUsers);
    if(onlineUsers.length >= 2)
      console.log('2 players');
  });

  socket.on('add ship', function(pick){
    // player.addShip(pick);
  })

  socket.on('disconnect', function(){
    for(var i = 0; i < onlineUsers.length; i++){
      if(onlineUsers[i].socket == socket.id)
        onlineUsers.splice(i, 1);
    }
  })

});

app.get('/', function(request, response){
  response.render('index');
});


http.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = http;
