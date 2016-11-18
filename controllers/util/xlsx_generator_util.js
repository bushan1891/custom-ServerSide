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
	{ header: 'Line item', key: 'Line item', width: 10 ,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Task', key: 'Task', width: 36, outlineLevel: 1,style: { font: { name: 'times new roman' },alignment : { vertical: 'middle', horizontal: 'center' } } },
	{ header: 'Average Hourly Rate', key: 'Average Hourly Rate', width: 20, outlineLevel: 1,style: { font: { name: 'times new roman' },alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Low Hours', key: 'Low Hours', width: 11,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
    { header: 'Hours', key: 'Hours', width: 15,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
	{ header: 'Low Cost', key: 'Low Cost', width: 15,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
	{ header: 'High Cost', key: 'High Cost', width: 11,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } },
	{ header: 'In Scope', key: 'In Scope', width: 10,style: { font: { name: 'times new roman'}, alignment : { vertical: 'middle', horizontal: 'center' } } }
  
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
    size: 11,
    bold: false
   }; ++currentLine ;


    worksheet.addRow({'Line item':'Line item','In Scope':'In Scope','Hours':'Hours','Task':'Task'}).font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 11,
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

worksheet.mergeCells('B1:H1');
worksheet.getCell('A1').value='Company :';
worksheet.getCell('C1').value='JCS Consulting Inc';


worksheet.getCell('A1').fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF016682'}
	};
worksheet.getCell('A1').font = {
    name: 'times new roman',
    color: { argb: 'FFFCFCFC' },
    family: 2,
    size: 11,
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
    size: 11,
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
    size: 11,
    bold: false
};

// end of styling header
worksheet.mergeCells('B2:H2');
worksheet.getCell('A2').value='WBS Name';
worksheet.getCell('B2').value=payload.cart_name;


// filling foreground color 

// var headerArray=[5,16,25,57,70,78,91,102,110,124];

console.log('array',headerArray);

headerArray.forEach(function(number){

// for line number 
	worksheet.mergeCells('A'+(number-1)+':A'+number);
	worksheet.getCell('A'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	
worksheet.getCell('A'+number).value='Line item';
worksheet.getCell('A'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }
// for task
worksheet.mergeCells('B'+(number-1)+':B'+number);	
	worksheet.getCell('B'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
worksheet.getCell('B'+number).value='Task';
worksheet.getCell('B'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }
// for Average Hourly Rate
worksheet.mergeCells('C'+(number-1)+':C'+number);
	worksheet.getCell('C'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
worksheet.getCell('C'+number).value='Average Hourly Rate';
worksheet.getCell('C'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }

// merge 4 cell that is number-1 

worksheet.mergeCells('D'+(number-1)+':H'+(number-1));
worksheet.getCell('G'+(number-1)).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('G'+(number-1)).value='';

// for Low Hours 
	worksheet.getCell('D'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('D'+number).value='Low Hours';
	worksheet.getCell('D'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }

// for High Hours 
	worksheet.getCell('E'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('E'+number).value='High Hours';
	worksheet.getCell('E'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }

// for Low cost 
	worksheet.getCell('F'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('F'+number).value='Low Cost';
	worksheet.getCell('F'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }

// High Cost 
	worksheet.getCell('G'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('G'+number).value='High Cost';
	worksheet.getCell('G'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }
// Inscope 
	worksheet.getCell('H'+number).fill = {
		type: 'pattern',
		pattern:'solid',
		fgColor:{argb:'FF2FA5CC'}
	};
	worksheet.getCell('H'+number).value='In Scope';
	worksheet.getCell('H'+number).font={bold:true ,color: { argb: 'FFFCFCFC' },size: 13, }

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
