var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res){
	res.render('quote', {
		layout : 'main',
		header : 'quote header',
		title: 'quote'
	});
});

router.post('/getQuote', function(req, res){
	
	var options = {
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    method : 'get',
        headers: {
        'X-Mashape-Key': 'Wz5nfbQnxSmshER9OVSIWfXvdHWmp1CTXIUjsntop4Pu5mQdNE',
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept' : 'application/json'
        }
    };

    request(options, processQuote);

    function processQuote(error, response, body){
    	console.log(JSON.stringify(response));
    	if(!error && response.statusCode==200)
    		res.send(JSON.stringify(body));
    }

	
});


module.exports = router;
