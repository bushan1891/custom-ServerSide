const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan =  require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
// initializing express app
const app = express();



//DB Setup
 
mongoose.connect('mongodb://localhost:auth/auth');

// App set up

// morgan and body parser are like middleware for express app it will pass the data in to them
// morgan is a logging middleware very useful for debugging
// body parser used for parsing json data

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}))

router(app);

// server Setup
const port = process.env.PORT || 3090;

// forwarding incoming request to express  app
const server = http.createServer(app);
server.listen(port);
console.log('listing on :', port);
