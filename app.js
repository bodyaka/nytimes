var express = require('express');
var http = require('http');
var path = require('path');
var proxy = require('express-http-proxy');
var config = require(path.join(__dirname, 'config'));

// project vars
var srcDojo = 'public/js/release';
var srcEngine = 'public/js/release/engine';
if(config.get('environment') == 'dev'){
	srcDojo = 'public/js/dojo-src';
	srcEngine = 'public/js/engine-src';
}

// Express config
var app = express();
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use('/api_nytimes', proxy('api.nytimes.com', {
	forwardPath: function(req, res) {
		return require('url').parse(req.url).path;
	}
}));
app.get('/',function(req,res){
	res.render('index', {
		srcDojo: srcDojo,
		srcEngine: srcEngine,
	});
});

// start server
http.createServer(app).listen(config.get('port'), config.get('ip'), function(){
	console.log('Server running at http://' + config.get('ip') + ':' + config.get('port') + '/');
});
