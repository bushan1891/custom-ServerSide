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
 
//mongoose.connect('localhost:27017/auth');
mongoose.connect('mongodb://root:root@ds057176.mlab.com:57176/jcstest');
//mongodb://root:root@ds057176.mlab.com:57176/jcstest
// App set up

// morgan and body parser are like middleware for express app it will pass the data in to them
// morgan is a logging middleware very useful for debugging
// body parser used for parsing json data

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}))

router(app);


// server Setup
const port = process.env.PORT || 5000;


// forwarding incoming request to express  app
const server = http.createServer(app);
server.listen(port);
console.log('listing on :', port);





