			
$(document).ready(function(){

	$("#getNews").click(function(){
		var source = $("#news-select").val();
		if(source==undefined || source==''){
			alert("please select the source");
		}
		else{
			getNewsArticle(source);
		}
	});

	$("#getNews_handlebars").click(function(){
		var source = $("#newshandlebars-select").val();
		if(source==undefined || source==''){
			alert("please select the source");
		}
		else{
			getNewsArticle(source);
		}
	});
	
	

	getNewsList();	
});

function getNewsList(){
	
	$.ajax({
		method: 'post',
		url: '/news/api/newslist',
		dataType: 'json',
		success: function(response){
			
			for(var i=0;i<response.length;i++){
				$("#news-select").append("<option style='background:url("+response[i].image+"); width: 200px;' value='"+response[i].id+"\'>"+response[i].name+"</option>");
			}

			console.log(response);
		}
	});
	
}


function getNewsArticle(source){
	$.ajax({
		method: 'post',
		url: '/news/api/newsArticle',
		data: {
			source: source
		},
		dataType: 'json',
		success: function(response){
			console.log(response.articles);
			var articles = '';
			$("#articles").html("");
			for(var i=0;i<response.articles.length;i++){
				articles = '<div class="col-md-6">'
				+'<h4 class="text-warning">'+response.articles[i].title+'</h4>'
				+'<img src='+response.articles[i].urlToImage+' width="300px" height="200px"> '
				+'<p class="text-muted">'+response.articles[i].description+'</p>'
				+'<p class="pull-right">-'+response.articles[i].author+'</p></div>';
				
				$(articles).hide().appendTo("#articles").fadeIn(1000);
			}

			

			
		}
	});
}