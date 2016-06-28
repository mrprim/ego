var express = require("express"),
	bodyParser = require("body-parser"),
	router = express.Router(),
	app = express(),
	users = require('./routes/users'),
	db = require("./db");

var route = router.route("/")
    .get(function(req,res){
        var response = {};
        db.users.find({},function(err,data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });
    
routes();
listen();



function routes() {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({"extended" : false}));
	app.use('/',route);
}

function listen() {
	var listenPort = process.env.PORT || 3000;
	app.listen(listenPort);
	console.log('Listening on port ' + listenPort);
}
