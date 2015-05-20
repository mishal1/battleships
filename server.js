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

io.on('connection', function(socket){
  console.log('connected')
});

app.get('/', function(request, response){
  response.render('index');
});


http.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = http;
