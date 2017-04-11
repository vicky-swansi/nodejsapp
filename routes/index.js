var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('index', {
		layout : 'main',
		header : 'this is the header for main',
		title: 'index'
	});
});


router.get('/data/user/:userId', function(req, res){
	var userId = req.params.userId;
	res.render('index', {
		layout : 'main',
		header : 'this is the header for main and user id is: ' + userId,
		title: 'index'
	});
});

router.get('/data/user', function(req, res){
	var user = {userId : '', userName : ''};
	user.userId = req.query.userid;
	user.userName = req.query.username;
	
	if(user.userId==undefined || user.userName==undefined){
		res.render('error');	
		return;
	}

	res.render('index', {
		layout : 'main',
		header : 'this is the header for main ',
		title: 'index',
		user : user,
	});
});
module.exports = router;
