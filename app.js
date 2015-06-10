var express = require('express');
var http = require('http');
var path = require('path');
var config = require(path.join(__dirname, 'config'));

var app = express();
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
	res.render('index');
});

http.createServer(app).listen(config.get('port'), config.get('ip'), function(){
	console.log('Server running at http://' + config.get('ip') + ':' + config.get('port') + '/');
});
