const Account = require('../../models/account');
module.exports={

    createAccount : function(req,res,next){
    // save the account information 
        console.log('account',req.body);

       const account = new Account(req.body);

		account.save(function(err){
			if(err){return next(err);}
		});	


		res.send(200,{"success":"true"});

    },
    fetchAccount : function(req,res,next){

    Account.find({},function(err,accounts){
	accounts.forEach(function(account){
		console.log(account);
		})
	res.send(200,accounts);
	});

    },
    deleteAccount : function(req,res,next){
        
    },
    updateAccount : function(req,res,next){
         console.log('At update account',req.params.id); 
          const updateAccount = req.body;  
          
          Account.update({_id:req.params.id},updateAccount,function(err,account){
               if(err){return next(err);}
               res.send(account);
          })  



          




    }

}