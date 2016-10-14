const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName:String,
  accountWBS:Object,
  author:String,
  sow:[],
  created:Date,
  projectManager:String	
});

accountSchema.pre('save',function(next){
  const account = this;
  console.log('this is before saving ',account);
  account.created= new Date();
  
	next();
});

const ModelClass = mongoose.model('account',accountSchema);
module.exports = ModelClass;