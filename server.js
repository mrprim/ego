var express = require("express"),
	bodyParser = require("body-parser"),
	router = express.Router(),
	app = express(),
	users = require('./routes/users'),
	db = require("./db");

var route = router.route("/")
    .get(function(req,res){
        var response = {test: 'test'};
        res.json(response);
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
