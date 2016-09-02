const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
// email is always unquie
const userSchema = new Schema({
  email : {type : String , unique : true , lowercase:true},
  password:String
});

//on save hook , encrypt password
// run before saving the model
userSchema.pre('save',function(next){
// get access to user model
  const user = this;
// generate a salt  then run callback
  bcrypt.genSalt(10, function(err,salt){
    if(err){
      return next(err);
    }
    // hash our password
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) { return next(err);}
// overwrite the plain text password with encrypted password
      user.password=hash;
      next();
    });

  })
})

userSchema.methods.comparePassword = function(candidatePassword, callback ){
  bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
    if(err){return next(err)}
    callback(null,isMatch);
  })
}


// Create the model class

const ModelClass = mongoose.model('user',userSchema);

// export the model
module.exports = ModelClass;
