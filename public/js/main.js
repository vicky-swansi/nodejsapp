			
$(document).ready(function(){
	$("#quoteButton").click(function(){
		$.ajax({
			method: 'post',
			url: '/quote/getQuote',
			dataType: 'json',
			success: function(response){
				var quote = JSON.parse(response);
				$("#cat").html(quote.category);
				$("#quote").html(quote.quote);
			}
		});
	});
});
