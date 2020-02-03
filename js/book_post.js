$(document).ready(function () {
	//AJAX JQuery script to send a POST request
	//Quick test values
	//Username: drogister0@umn.edu or drogister0
	//Password: sN525spWNc
	$('#room_search').on('click', function(){
		var input1 = $("#room_checkindate").val(); //getting the current datein value into a variable
		var input2 = $("#room_checkoutdate").val(); //getting the current dateout value into a variable
		var input3 = $("#room_pax").val(); //getting the current pax value into a variable

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
		var testdata = {"result":[{"0":["3","Terraza","3","6000","Beautiful place","6","1"]},{"1":["13","Cabana","4","9000","Beautiful place","6","1"]},{"2":["15","Pandan","1","7000","Beautiful place","5","1"]},{"3":["23","Nipahut","3","3500","Beautiful place","6","1"]},{"4":["27","Dorm","1","12000","Beautiful place","20","1"]},{"5":["28","Function hall","3","12000","Beautiful place","150","1"]}]}
	});
});
