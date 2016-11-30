$(document).ready(function() {
	var page = 1;
	var totalPages = 0;
	var markFilter = '',
			modelFilter ='',
			yearFilter ='',
			hpFilter ='';
	var url = "http://localhost:8081/rst/api/cars";



	$("#button").click(function (){


		console.log("asd");
		console.log(markFilter);
		firstPage();
	});


	$("#nextBt").click(function () {
		page++
		update();

});


var firstPage = function (data) {
	$.get({
		url: url,
		dataType: "json",
		data:{"page": 1,
				"markFilter": markFilter,
				"modelFilter": modelFilter,
				"yearFilter": yearFilter,
				"hpFilter": hpFilter
		},
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
				tr.append("<td> " + data[index].horsePower + "</td>")
				$("#carsTable").append(tr);
				$("#carsTable").append(tr);
			});
		}

	});
}


	$("#markFilter").on('input', function () {
			markFilter = $("#markFilter").val();
			console.log(markFilter);
			firstPage();
	})

	$("#modelFilter").on('input', function () {
			modelFilter = $("#modelFilter").val();
			console.log(markFilter);
			firstPage();
	})

	$("#yearFilter").on('input', function () {
			yearFilter = $("#yearFilter").val();
			console.log(markFilter);
			firstPage();
	})

	$("#hpFilter").on('input', function () {
			hpFilter = $("#hpFilter").val();
			console.log(markFilter);
			firstPage();
	})

	var update = function () {
		$.get({
			url: url,
			dataType: "json",
			data:{"page": page,
					"markFilter": markFilter},
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

	}

});
