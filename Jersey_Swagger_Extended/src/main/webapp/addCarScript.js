$(document).ready(function() {
  $("#addCarBt").click(function (){
  		//alert("kur");
  		var mark = $('#mark').val();
  		var model = $('#model').val();
  		var hp = $('#horsePower').val();
  		var year = $('#year').val();
  		var JSONObj = {
  						"mark": mark,
  						"model": model,
  						"horsePower": parseInt(hp),
  						"year": year};
  		console.log(JSONObj);
  		$.post({
  			url: "http://localhost:8081/rst/api/cars",
  			contentType: "application/json; charset=utf-8",
  			dataType: "json",
  			data: JSON.stringify(JSONObj),
  			success: function(data){
  				console.log(data);
  			  //alert("asd");
  			}
  		});
  });
});
