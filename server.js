var express = require("express"),
	bodyParser = require("body-parser"),
	router = express.Router(),
	app = express();

routes();
listen();

function routes() {
	router.get('/', function (req, res) {
	    res.json({test:'test'});
	});

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({"extended" : false}));
	app.use('/', router);
}

function listen() {
	var listenPort = process.env.PORT || 3000;
	app.listen(listenPort);
	console.log('Listening on port ' + listenPort);
}
