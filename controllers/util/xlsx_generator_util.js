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
    { header: 'In Scope', key: 'In Scope', width: 32 ,style: { font: { name: 'Comic Sans MS' }, alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Hours', key: 'Hours', width: 80,style: { font: { name: 'Comic Sans MS' }, alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Task', key: 'Task', width: 60, outlineLevel: 1,style: { font: { name: 'Comic Sans MS' },alignment : { vertical: 'middle', horizontal: 'center' } } }
];


var tables = payload.data;
console.log(tables);
worksheet.getCell('B0').value = tables[0].tableName; 

var In_Scope = worksheet.getColumn('In Scope');	
var Hours = worksheet.getColumn('Hours');	
var Task = worksheet.getColumn('Task');	


	tables.forEach(function(table){
		
		worksheet.addRow({});	
        worksheet.addRow({});
		worksheet.addRow({'Hours':table.tableName}).font = {
    name: 'Arial Black',
    color: { argb: '000000' },
    family: 2,
    size: 14,
    bold: true
};;
		worksheet.addRow({'In Scope':'In Scope','Hours':'Hours','Task':'Task'}).font = {
    name: 'Arial Black',
    color: { argb: '000000' },
    family: 2,
    size: 14,
    bold: true
};

		table.tableRows.forEach(function(row){
			if(row['In Scope']=='Yes'){
				worksheet.addRow(row).font={
					color:{argb:'FF00FF00'},
					bold: true
				}
			}
			else{
			worksheet.addRow(row);	
			}
			
		})

		worksheet.addRow({});
		worksheet.addRow({});
		
	})

worksheet.getCell('A1').value='Company :';
worksheet.getCell('B1').value='Jcs Consulting Inc,';
worksheet.getCell('C1').value='';

worksheet.getCell('A2').value='WBS Name';
worksheet.getCell('B2').value=payload.cartName;
worksheet.getCell('C2').value='';

	workbook.xlsx.writeFile("test.xlsx").then(function() {
	    console.log("xls file is written.");

	});
return '';
 }
}