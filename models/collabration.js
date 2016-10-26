const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = mongoose.Schema;

const collaborationSchema = new Schema({
rooms:[],
});

collaborationSchema.pre('save',function(next){  
	next();
});

const ModelClass = mongoose.model('collabaration',collaborationSchema);
module.exports = ModelClass;