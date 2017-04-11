var express = require('express');								//create a new express app
var exphbs = require('express-handlebars');
var router = express.Router();									//use express 4.0 router to define routes
var bodyParser = require('body-parser'); 						//pull information from html post
var cookieParser = require('cookie-parser');
var http = require('http');
var path = require('path');
var winston = require('winston');

var app = express();

var page1 = require('./routes/page1');
var jadhav = require('./routes/neeraj');
var index = require('./routes/index');
var registerForm = require('./routes/registerForm');
var user = require('./routes/user');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));		//set the app engine and default layout name 'main'

app.set('port', process.env.PORT || 8000);						//set port to either environment port OR 8080
app.set('views', path.join(__dirname, 'views')); 				//by default, express expects its template files to be in the views folder. In case you have a different path, you can update it here.
app.set('view engine', 'handlebars');							//define the view engine
app.set('author','vivek')
//app.use
app.use(express.static(path.join(__dirname, 'public')));		//declares the location of static resources (css, js ,images)

app.use(bodyParser.urlencoded({extended:true}));            	// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cookieParser()); 										// read cookies (needed for auth)


app.use('/page1', page1);
app.use('/page2', jadhav);
app.use('/', index);
app.use('/register', registerForm);
app.use('/user', user);


app.use(function(req, res, next){
	var error = new Error('Not found');
	error.status = 404;
	res.render('error');
})
//create server and listen to the port
http.createServer(app).listen(app.get('port'), function(){
	winston.log('info', 'The server has started');
});

process.on('uncaughtException', function (err) {
    winston.log('info', '-------------- UNCAUGHT EXCEPTION: ' + err);
    winston.log('info', '------------- ERROR STACK -------------');
    winston.log('info', err.stack);
    winston.log('info', '---------------------------------------');
});

module.exports = app;
