$(document).ready(function() {
	var page = 1;
	var totalPages = 0;
	var url = "http://localhost:8081/rst/api/cars";
	$("nextBt").hide();
	$("prevBt").hide();



	$("#button").click(function (){
		$.get({
			url: url,
			dataType: "json",
			data:{"page": 1},
			success: function(data){
				console.log(data);
				$("#carsTable").empty();
					if(data == ""){
						$("nextBt").hide();
				}
				$("#carsTable").html('<tr>' +
			'<th>Mark</th>' +
			'<th>Model</th>' +
			'<th>Year</th>' +
			'<th>HorsePower</th>' +
		'</tr>');

				$.each(data, function(index){
					var tr = $('<tr>');
					tr.append("<td> " + data[index].mark + "</td>");
					tr.append("<td> " + data[index].model + "</td>");
					tr.append("<td> " + data[index].year + "</td>");
					tr.append("<td> " + data[index].horsePower + "</td>");

					$("#carsTable").append(tr);
				});
			}

		});
	});
	$("#nextBt").click(function () {
		page++
		$.get({
			url: url,
			dataType: "json",
			data:{"page": page},
			success: function(data){
				console.log(data);
				if (data.length > 0) {
					page++;
					$.each(data, function(index){
						var tr = $('<tr>');
						tr.append("<td> " + data[index].mark + "</td>");
						tr.append("<td> " + data[index].model + "</td>");
						tr.append("<td> " + data[index].year + "</td>");
						tr.append("<td> " + data[index].horsePower + "</td>")
						$("#carsTable").append(tr);
					});
				}else {
					$("#nextBt").hide();
				}
			}
	})
});



});
