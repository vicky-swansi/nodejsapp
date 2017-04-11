var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('page1', {
		header : 'this is the header',
		title: 'page1',
	});
});


module.exports = router;
