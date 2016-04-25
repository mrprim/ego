var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("./models/mongo");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

require('./models/crudLoader.js')(router,mongoOp);

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");