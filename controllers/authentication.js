const User = require('../models/user');
const jwt = require('jwt-simple');

// jwt by default will have sub
function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({sub:user.id ,iat:timestamp},'this is a secret');
}

exports.signin = function(req,res, next){
// User has alreday had their email and password
// pass token
// user object is available on req this is sent by passport

res.send({token:tokenForUser(req.user)});

}


exports.signup = function(req,res,next){

const email = req.body.email;
const password = req.body.password;
// see if user exists
if(!email || !password){
  res.status(422).send({error:'You must provide email and password'});
}
User.findOne({email:email},function(err,existingUser){
  if(err){
    return next(err);
    }
    // if user with email exist return error
    if(existingUser){
      return res.status(422).send({error:'email is in use'});
    }

// if a user with email does not exist , create save user record
const user = new User({
  email:email,
  password:password
});

user.save(function(err){
  if(err){return next(err);}
});

// need to send a token
res.json({"token" : tokenForUser(user)});


});


// Resond to request indicating the user created

}
