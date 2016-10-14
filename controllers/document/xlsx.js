var Excel = require('exceljs');
var path = require('path');
var mime = require('mime');
var _ = require('lodash');
var fs = require('fs');
var Xlsx = require('../util/xlsx_generator_util');
//generates the excel file 
exports.generateXlsx = function(req,res,next){
	Xlsx.createXlsx(req.body);
	res.send('');
}

exports.downloadExcel = function(req,res,next){
		// streaming data 
		  var file = 'test.xlsx';

		  var filename = path.basename(file);
		  var mimetype = mime.lookup(file);

		  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		  res.setHeader('Content-type', mimetype);

		  var filestream = fs.createReadStream(file);
		  filestream.pipe(res);	
}