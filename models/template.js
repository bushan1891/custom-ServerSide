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
const ModelClass = mongoose.model('template',templateSchema);
module.exports = ModelClass;