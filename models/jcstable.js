const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Jcstable = new Schema({
  tableName:String,
  tableHeader:Array,
  tableRows:Array,
  tableRowCount:Number,
  tableColumnCount:Number,
  slectedIndex:[],
});

Jcstable.pre('save',function(next){
	next();
});
const ModelClass = mongoose.model('Jcstable',Jcstable);
module.exports = ModelClass;