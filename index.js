const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan =  require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


// initializing express app
const app = express();
var Auth0Strategy = require('passport-auth0');
//var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
//DB Setup
 
mongoose.connect('localhost:27017/auth');
//mongoose.connect('mongodb://root:root@ds057176.mlab.com:57176/jcstest');
//mongodb://root:root@ds057176.mlab.com:57176/jcstest
// App set up

// morgan and body parser are like middleware for express app it will pass the data in to them
// morgan is a logging middleware very useful for debugging
// body parser used for parsing json data



app.use(morgan('combined'));

app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host+':8000');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    }
);
app.use(cors());
app.use(bodyParser.json({type:'*/*'}))

router(app);

//chat 




// server Setup
const port = process.env.PORT || 5000;


// forwarding incoming request to express  app
const server = http.createServer(app);
server.listen(port);
var io = require('socket.io')(server);
console.log('listing on :', port);





io.on('connection', function(socket){
    console.log('connected');
 // socket.emit('an event', { some: 'data' });

socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log(msg);
    socket.broadcast.emit('incoming',msg);
  });

});
