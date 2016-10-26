const Collabaration = require('../../models/collabration');
module.exports={

    createCollabaration : function(req,res,next){
    // save the Collabaration information 
        console.log('Collabaration',req.body);

       const collabaration = new Collabaration(req.body);

		collabaration.save(function(err){
			if(err){return next(err);}
		});	

		res.send(200,{"success":"true"});

    },
    fetchCollabaration : function(req,res,next){

    Collabaration.find({},function(err,Collabarations){
        Collabarations.forEach(function(Collabaration){
            console.log(Collabaration);
            })
	res.send(200,Collabarations);
	});

    },
    deleteCollabaration : function(req,res,next){
        
    },
    updateCollabaration : function(req,res,next){
        
    }

}