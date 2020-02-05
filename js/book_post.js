$(document).ready(function () {
	var room_id = $();
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
			try {
  			var obj = jQuery.parseJSON(data);
				var rooms = $('#rooms-container');
				rooms.empty();
				var cards = $();
				$.each(obj, function(key, value) {
					cards =`<div class="card bg-secondary border-dark w-100 my-2">
					<div class="row no-gutters">
						<div class="col-md-5 fill">
							<img src="img/room1.jpg" class="card-img">
						</div>
						<div class="col-md-7">
							<div class="card-body">
								<h4 class="card-title">`+value.room_name+` #`+value.room_accommodation_num+`</h4>
								<p class="card-text text-justify">`+value.room_desc+`</p>
							</div>
							<div class="card-footer container-fluid text-center">
								<div class="container-fluid">
									<div class="container-fluid row row-cols-3 no-gutters row-center">
										<div class="col text-center no-gutters row-center"><i class="material-icons">attach_money</i><a>`+value.price+`</a></div>
										<div class="col text-center no-gutters row-center"><i class="material-icons mr-2">people</i><a>`+value.room_num+`</a></div>
										<div class="col text-center no-gutters"><a class="btn btn-success btn-xs" id="`+value.ID+`" href="#" data-target="#main-content" data-slide-to="5">Select</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>`;
					rooms.append(cards);
				});
			}
				catch (err) {
  			alert(err)
			}
		});
	});

	$('#rooms-container').on('click', '.btn', function(){
		room_id = event.target.id;
		alert("room ID: "+room_id);
	});

	$('#signup-create').on('click', function(){
		var input1 = $("#signup-lastname").val(); //getting the current datein value into a variable
		var input2 = $("#signup-firstname").val(); //getting the current dateout value into a variable
		var input3 = $("#signup-email").val(); //getting the current pax value into a variable
		var input4 = $("#signup-NoMobile").val();
		var input5 = $("#signup-NoLandline").val();
		var input6 = $("#signup-username").val();
		var input7 = $("#signup-password").val();
		var input8 = $("#signup-repassword").val();

		$.post("src/book_post.php", //create a POST request
		{
			signup_lastname:  input1, //sending the variable with the password through POST
			signup_firstname: input2,
			signup_email: input3,
			signup_NoMobile: input4,
			signup_NoLandline: input5,
			signup_username: input6,
			signup_password: input7,
			signup_repassword: input8
		},
		function(data){ //If the POST request was successful, this function is executed.
			try {
  			alert("success");
			}
				catch (err) {
  			alert(err)
			}
		});
	});


});
