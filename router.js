const Authentication = require('./controllers/authentication');
const Table =require('./controllers/table/tablecontroller');
const Document = require('./controllers/document/createdoc');
const Xlxs = require('./controllers/document/createxlx');
const xls = require('./controllers/readxls/xls');
const Excel = require('./controllers/document/xlsx');
const accountController = require('./controllers/account/accountController');
const templateController = require('./controllers/template/templateController');

var Auth0Strategy = require('passport-auth0');

const passportService = require('./services/passport');
const passport = require('passport');
// session false means not using cookie based authentication
const requireAuth = passport.authenticate('jwt',{session:false});
const requireSignin =passport.authenticate('local',{session:false});

module.exports = function(app){

app.get('/',requireAuth,function(req,res){
  res.send({'message':'code 123'})
});
app.post('/signin',requireSignin,Authentication.signin)
app.post('/signup',Authentication.signup);


app.get('/tables',requireAuth,Table.getTables);
app.get('/table/:id',requireAuth,Table.getTable);
app.post('/table',requireAuth,Table.postTable);

app.post('/jcstable',Table.PostJcstable);


app.get('/document',Document.createDoc);
app.post('/xlsx',Xlxs.createxls);
app.post('/xlstojson',xls.readxls);

app.post('/excel',Excel.generateXlsx);
app.get('/excel',Excel.downloadExcel);

// account 
app.get('/account',accountController.fetchAccount);
app.post('/account',accountController.createAccount);
app.delete('/account/id',accountController.deleteAccount);
app.put('/account',accountController.updateAccount);


app.get('/test-endpoint',function(req,res,next){
    res.send(new Date());
})

// Template 
app.get('/template',templateController.fetchTemplate);
app.post('/template',templateController.createTemplate);
app.delete('/template/id',templateController.deleteTemplate);
app.put('/template',templateController.updateTemplate);



}
