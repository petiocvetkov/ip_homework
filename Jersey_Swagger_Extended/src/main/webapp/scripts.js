$(document).ready(function() {
	$("#button").click(function (){
		$.get({
			url: "http://localhost:8081/rst/api/cars",
			dataType: "json",
			success: function(data){
				console.log(data);
				$("#carsTable").empty();

				$.each(data, function(index){
					var tr = $('<tr>');
					tr.append("<td> " + data[index].mark + "</td>");
					$("#carsTable").append(tr);
				});
			}

		});
	});
});
