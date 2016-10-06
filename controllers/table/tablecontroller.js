
const Table = require('../../models/table');


exports.getTable = function(req,res,next){
console.log('getTable' ,req.body);
}

exports.getTables = function(req,res,next){

	Table.find({},function(err,tables){

	tables.forEach(function(table){
		console.log(table);
		})
	res.send(200,tables);
	});

}

exports.postTable = function(req,res,next){

		const header = req.body.tableHeader;
		headerArray = header.split(",");
		req.body.tableHeader=headerArray;
		const table = new Table(req.body);
		table.save(function(err){
			if(err){return next(err);}
		});

		res.send(200,{"success":"true"});

}