var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('page2', {
		layout : 'layouts2',
		header: 'This is my 2nd header',
	});

})

module.exports = router;