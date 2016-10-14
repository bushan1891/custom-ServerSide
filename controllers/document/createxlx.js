var fs = require('fs');
var officegen = require('officegen');
var path = require('path');
var mime = require('mime');
var _ = require('lodash');


exports.createxls = function(req,res,next){

var payload = req.body;

var xlsx = officegen ( 'xlsx' );
xlsx.on ( 'finalize', function ( written ) {
			console.log ( 'Finish to create an Excel file.\nTotal bytes created: ' + written + '\n' );
		

		// streaming data 
		  var file = 'out.xlsx';

		  var filename = path.basename(file);
		  var mimetype = mime.lookup(file);

		  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
		  res.setHeader('Content-type', mimetype);

		  var filestream = fs.createReadStream(file);
		  filestream.pipe(res);	

	
		});

xlsx.on ( 'error', function ( err ) {
			console.log ( err );
		});


sheet = xlsx.makeNewSheet ();
sheet.name = 'Excel Test';

// parse through tables 
// loops over number of table 
var tables = payload.data;
sheet.data[0]=getHeader();// header is set 
var rowcount =0;
var offset=3;
var start =true
for(var i=0;i<tables.length;i++){

console.log('header at ', i+rowcount );
	for(var j=0;j<tables[i].tableRows.length;j++){
		console.log(j+rowcount,'tables',JSON.stringify(_.values(tables[i].tableRows[j])));
		if(start=true)
		sheet.data[j+rowcount+offset]=_.values(tables[i].tableRows[j]);
	}
	rowcount=tables[i].tableRows.length;
	sheet.data[i+rowcount+1]=getHeader();
	rowcount=rowcount+2;
}

console.log('sheet',sheet.data);

console.log('sheet',sheet);


// The direct option - two-dimensional array:
// sheet.data[1][4] = 'More';
// sheet.data[1][5] = 'Text';
// sheet.data[1][6] = 'Here';
// sheet.data[2] = [];
// sheet.data[2][5] = 'abc';
// sheet.data[2][6] = 900;
// sheet.data[6] = [];
// sheet.data[6][2] = 1972;

// Using setCell:
// sheet.setCell ( 'E7', 340 );
// sheet.setCell ( 'I1', -3 );
// sheet.setCell ( 'I2', 31.12 );
// sheet.setCell ( 'G102', 'Hello World!' );

var out = fs.createWriteStream ( 'out.xlsx' );

out.on( 'error', function ( err ) {
	console.log ( err );
});

xlsx.generate ( out );


}

function getHeader(){
	return ['Hours','In Scope','Task'];
}
