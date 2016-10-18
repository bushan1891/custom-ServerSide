const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const templateSchema = new Schema({
    cart:Array,
    otherItem:Array,
    Title:String	
});
 templateSchema.pre('save',function(next){
	next();
});
const ModelClass = mongoose.model( templateSchema);
module.exports = ModelClass;