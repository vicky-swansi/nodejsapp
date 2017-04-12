var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res){
	res.render('news-paper', {
		layout : 'layout2',
		title: 'news'
	});
});

router.post('/api/newsArticle', function(req, res){
	
	var source = req.body.source;
	var url = 'https://newsapi.org/v1/articles?source=' +source+ '&apiKey=fd97fccd2fa14e42860647110afc8bf9';
	
	var options = {
    	url: url,
    	method : 'get'
    };

    request(options, processNewsArticle);

    function processNewsArticle(error, response, body){
    	
    	if(!error && response.statusCode==200){

    		var newsArticle = JSON.parse(body);

    		res.send(newsArticle);
    	}
    }

    function newsArticle(id, name, image){
    	this.id = id;
    	this.name = name;
    	this.image = image;
    }


});


router.post('/api/newslist', function(req, res){
	

	var options = {
    url: 'https://newsapi.org/v1/sources?language=en',
    method : 'get'
    };

    request(options, processNewsList);

    function processNewsList(error, response, body){

    	if(!error && response.statusCode==200){

    		var newSources = JSON.parse(body).sources;
    		var newsArray = [];
    		console.log(newSources);

    		for(var i=0;i<newSources.length;i++){
    			newsArray.push(new news(newSources[i].id, newSources[i].name, newSources[i].urlsToLogos.small));
    		}

    		res.send(JSON.stringify(newsArray));
    	}
    }

    function news(id, name, image){
    	this.id = id;
    	this.name = name;
    	this.image = image;
    }


});

module.exports = router;
