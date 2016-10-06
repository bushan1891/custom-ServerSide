const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tableSchema = new Schema({
  tableId : Number,
  tableName:String,
  tableHeader:Array,
  tableRowCount:Number,
  tableColumnCount:Number 	
});

tableSchema.pre('save',function(next){
	next();
});
const ModelClass = mongoose.model('table',tableSchema);
module.exports = ModelClass;