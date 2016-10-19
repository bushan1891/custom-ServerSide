const Template = require('../../models/template');
module.exports={

    createTemplate : function(req,res,next){
    // save the Template information 
        console.log('Template',req.body);

       const template = new Template(req.body);

		template.save(function(err){
			if(err){return next(err);}
		});	

		res.send(200,{"success":"true"});

    },
    fetchTemplate : function(req,res,next){

    Template.find({},function(err,Templates){
        Templates.forEach(function(Template){
            console.log(Template);
            })
	res.send(200,Templates);
	});

    },
    deleteTemplate : function(req,res,next){
        
    },
    updateTemplate : function(req,res,next){
        
    }

}