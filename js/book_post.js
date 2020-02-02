$(document).ready(function () {
	//AJAX JQuery script to send a POST request
	//Quick test values
	//Username: drogister0@umn.edu or drogister0
	//Password: sN525spWNc
	$('#room_search').on('click', function(){
		var input1 = $("#room_checkindate").val(); //getting the current datein value into a variable
		var input2 = $("#room_checkoutdate").val(); //getting the current dateout value into a variable
		var input3 = $("#room_pax").val(); //getting the current pax value into a variable

		//alert(input1);
		//alert(input2);
		//alert(input3);
		$.post("src/book_post.php", //create a POST request
		{
			room_checkindate:  input1, //sending the variable with the password through POST
			room_checkoutdate: input2,
			room_pax: input3
		},
		function(data){ //If the POST request was successful, this function is executed.
			alert (data);
		}
		);
	});
});
