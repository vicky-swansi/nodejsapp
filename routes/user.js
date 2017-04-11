var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.json({
		"name" : "vivek",
		"author": "new author"
	});
})


module.exports = router;