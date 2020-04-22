
var BASE_URL = "http://localhost/sky_backend/client_scripts/";
var host_url = "http://localhost/sky_backend/images/";
var price;


function getContent(item_id,sub_title,price) {
	
	changeView("pcPage",current_view,sub_title);

	var parent = document.getElementById("products");
	parent.innerHTML = "";


// $("#price").change(function () {
 
// price = $("#price").val();

// });


var dataString = 'id='+item_id;

 $.ajax({

		url: BASE_URL+'getItems.php',
		type: 'GET',
		data: dataString,
		success: function (response) {
           
           	try{

			var json = JSON.parse(response);
			if (json.status === 'success'){
				console.log('retrival was a successful');
	 			json = json.data;
	 			contentDom(json);
			}else{
	 			alert(data.message);
	 		}
		}catch(e){
			console.log('JSON input parse error handled!');
 			changeView("pcPage",current_view,sub_title);
		}
		
		}

	});		



	

}

 

function contentDom(data) {

	console.log("creating dom");
	
	var parent = document.getElementById("products");
	for (var i = 0; i < data.length; i++) {
		
		var image = document.createElement("div");
		image.innerHTML = "<div class='ui centered fluid card' style='z-index: -2;'><div class='image' ><img src='"+host_url+data[i].photo+"'></div><div class='content'><div class='header'>"+data[i].discrption+"</div><div class='meta'><div>"+ "MK    " + data[i].price+"</div></div><button class='button-primary one' id='details'>more details</button></div></div><br>";

		parent.append(image);
	}

	
}