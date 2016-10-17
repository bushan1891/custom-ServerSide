const passport = require('passport');
const User = require('../models/user');
const JWtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for jwt Strategy
// look for header autherization field for every request made
// secretOrKey > used to hash token when issued
const jwtOptions ={
  jwtFromRequest : ExtractJwt.fromHeader('autherization'),
  secretOrKey:'this is a secret'
};

// create jwt stategy
// payload here is the decoded token sub iat
// done is the callback property we have call if the user is authenticated or not
const jwtLogin = new JWtStrategy(jwtOptions,function(payload,done){
// see if the user id in the payload exists in our database
  // if it does , call 'done ' with that other
  // otherwise , call done without a user object

  User.findById(payload.sub,function(err,user){
    if(err){return done(err,false);}

    if(user){
      done(null,user);
    }else{
      done(null,false);
    }
  })

});


// tell passport to use this strategy
passport.use(jwtLogin);
