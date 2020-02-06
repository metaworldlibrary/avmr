$(document).ready(function () {
	var room_id = $();
	//AJAX JQuery script to send a POST request
	//Quick test values
	//Username: drogister0@umn.edu or drogister0
	//Password: sN525spWNc
	$('#room_search').on('click', function(){
		$.post("src/book_post.php", //create a POST request
		{
			room_checkindate:  $("#room_checkindate").val(), //sending the variable with the password through POST
			room_checkoutdate: $("#room_checkoutdate").val(),
			room_pax: $("#room_pax").val()
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
		//room_id = event.target.id;
		$.post("src/book_post.php", //create a POST request
		{
			room_id: event.target.id
		},
		function(data){ //If the POST request was successful, this function is executed.
			try {
  			//alert("success2");
			}
				catch (err) {
  			alert(err)
			}
		});
		//alert("room ID: "+room_id);
	});

	$('#signup-create').on('click', function(){
		$.post("src/book_post.php", //create a POST request
		{
			signup_lastname:  $("#signup-lastname").val(), //sending the variable with the password through POST
			signup_firstname: $("#signup-firstname").val(),
			signup_email: $("#signup-email").val(),
			signup_NoMobile: $("#signup-NoMobile").val(),
			signup_NoLandline: $("#signup-NoLandline").val(),
			signup_username: $("#signup-username").val(),
			signup_password: $("#signup-password").val(),
			signup_repassword: $("#signup-repassword").val()
		},
		function(data){ //If the POST request was successful, this function is executed.
			try {
  			//alert("success");
			}
				catch (err) {
  			alert(err)
			}
		});
	});


});
