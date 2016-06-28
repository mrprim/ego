var express = require("express"),
	bodyParser = require("body-parser"),
	app = express(),
	users = require('./routes/users'),
	db = require("./db");


routes();
listen();


function routes() {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({"extended" : false}));
//	app.use('/users',users);
}

function listen() {
	var listenPort = process.env.PORT || 3000;
	app.listen(listenPort);
	console.log('Listening on port ' + listenPort);
}
