$(document).ready(function(){
	
	$('#price').change(function(){
		var price = $(this).val();
		$("#price_range").text("Products Below Price " + price);
		
		$.ajax({
			url: 'data.php',
			type: 'POST',
			data: {price: price},
			success: function(data){
				$("#product_list").html(data);
			}
		});
		
	});
	
});