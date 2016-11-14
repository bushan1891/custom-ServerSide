var Excel = require('exceljs');
var path = require('path');
var mime = require('mime');
var _ = require('lodash');
var fs = require('fs');

module.exports ={
createXlsx :function(payload){

var workbook = new Excel.Workbook();
workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();


// create new sheet with pageSetup settings for A4 - landscape
var worksheet =  workbook.addWorksheet('test', {
  pageSetup:{paperSize: 9, orientation:'landscape'}
});


worksheet.columns = [
    { header: 'In Scope', key: 'In Scope', width: 50 ,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Hours', key: 'Hours', width: 60,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Task', key: 'Task', width: 50, outlineLevel: 1,style: { font: { name: 'times new roman' },alignment : { vertical: 'middle', horizontal: 'center' } } }
];

var tables = payload.data;
console.log(tables);
worksheet.getCell('B0').value = tables[0].tableName; 

var In_Scope = worksheet.getColumn('In Scope');	
var Hours = worksheet.getColumn('Hours');	
var Task = worksheet.getColumn('Task');	
var headerArray =[];
var currentLine=4;


worksheet.addRow({});
worksheet.addRow({});
	tables.forEach(function(table){
	
	worksheet.addRow({'Hours':table.tableName,'In Scope':'','Task':''}).font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 14,
    bold: false
   }; ++currentLine ;


    worksheet.addRow({'In Scope':'In Scope','Hours':'Hours','Task':'Task'}).font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 14,
    bold: false
};
console.log('pushing',currentLine);
headerArray.push(currentLine);
	
		table.tableRows.forEach(function(row){
			
			if(row['In Scope']=='Yes'){
				worksheet.addRow(row).font={
					name: 'times new roman',
					color:{argb:'000000'},
					size: 11,
					bold: true
				}
			}
			else{
			worksheet.addRow(row);	
			}
		++currentLine;	
		})
		++currentLine;

		worksheet.addRow({});
		worksheet.addRow({}); currentLine = currentLine+2;
	})
// end  of  above loop

// syling the header 

worksheet.getCell('A1').value='Company :';
worksheet.getCell('B1').value='Jcs Consulting Inc,';
worksheet.getCell('C1').value='';

worksheet.getCell('A1').fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF016682'}
	};
worksheet.getCell('A1').font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 14,
    bold: false
};

worksheet.getCell('B1').fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF016682'}
	};
worksheet.getCell('B1').font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 14,
    bold: false
};

worksheet.getCell('C1').fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF016682'}
	};
worksheet.getCell('C1').font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 14,
    bold: false
};

// end of styling header

worksheet.getCell('A2').value='WBS Name';
worksheet.getCell('B2').value=payload.cartName;
worksheet.getCell('C2').value='';

// filling foreground color 

// var headerArray=[5,16,25,57,70,78,91,102,110,124];

console.log('array',headerArray);

headerArray.forEach(function(number){
	
	worksheet.getCell('A'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('B'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('C'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
});

headerArray.forEach(function(number ){
	var headernum = number-1;
worksheet.getCell('A'+headernum).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('B'+headernum).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('C'+headernum).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
})

	workbook.xlsx.writeFile("test.xlsx").then(function() {
	    console.log("xls file is written.");

	});

return '';
 }
}
