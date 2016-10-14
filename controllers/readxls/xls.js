var excel2json = require("excel-to-json");

exports.readxls = function(req,res,next){

	excel2json({
    input: "test.xlsx",  // input directory  
    output: "test.json" // output directory  
   }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });

res.send("success")

}