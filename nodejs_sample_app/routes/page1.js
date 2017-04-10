var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('page1', {
		header: 'This is my header',
	});

})

module.exports = router;