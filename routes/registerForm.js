var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res){
	res.render('register', {
		layout : 'main',
		header : 'this is the header for main',
		title: 'form'
	});
});


router.post('/', function(req, res){

	res.json({
		first_name: req.body.fname,
		last_name: req.body.lname,
		email: req.body.email,
		password: req.body.pwd,
	});
});

module.exports = router;