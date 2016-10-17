const passport = require('passport');
const User = require('../models/user');
const JWtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy  = require('passport-local');

// creating a local strategy  for sign in  // usernameField because we are using email
const localOptions = {usernameField:'email'}
const localLogin = new LocalStrategy(localOptions, function(email,password,done){
// Verify this username and password , call done with the user

// if it is the correct email passport

// otherwise call done with false
User.findOne({email:email},function(err,user){
  if(err) {return next(err)};

  if(!user){return done(null,false)}

// compare passpord with encrypted password
user.comparePassword(password, function(err,isMatch){
  if(err){return next(err);}
  if(!isMatch){return done(null,false);}

  return done(null,user);
})

});
})


// setup options for jwt Strategy
// look for header autherization field for every request made
// secretOrKey > used to hash token when issued
const jwtOptions ={
  jwtFromRequest : ExtractJwt.fromHeader('authorization'),
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

passport.use(localLogin);
