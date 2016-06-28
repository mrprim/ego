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
	router.get('/test/', function (req, res) {
	    res.json({test:'test 2'});
	});

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({"extended" : false}));
	app.use('/', router);
    app.use(basicErrorHandling);	
}

function listen() {
	var listenPort = process.env.PORT || 3000;
	app.listen(listenPort);
	console.log('Listening on port ' + listenPort);
}

function basicErrorHandling (err, req, res, next) {
    if (err.stack) {
        console.error(err.stack);
        res.status(500).send('Unfortunately an error has occurred.');
    } else {
        res.status(400).json({
            error: err
        });
    }
}