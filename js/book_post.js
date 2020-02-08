$(document).ready(function () {
	//AJAX JQuery script to send a POST request
	//Quick test values
	//Username: drogister0@umn.edu or drogister0
	//Password: sN525spWNc
	var room_id = $();
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
  			alert(err);
			}
		});
	});

	$('#rooms-container').on('click', '.btn', function(){
		room_id = event.target.id;
		$.post("src/find_room_post.php", //create a POST request
		{
			room_id: room_id
		},
		function(data){ //If the POST request was successful, this function is executed.
			try {
				var obj = jQuery.parseJSON(data);
  			$('#confirm-card-title').text(obj.room_name + " #" + obj.room_accommodation_num);
				$('#confirm-card-description').text(obj.room_desc);
				$('#confirm-card-price').text(obj.price);
				$('#confirm-card-numpeople').text(obj.room_num);
			}
			catch (err) {
  			alert(err);
			}
		});
	});

	$('#signup-create').on('click', function(){
		$("#confirm-firstname").val($("#signup-firstname").val());
		$("#confirm-lastname").val($("#signup-lastname").val());
		$("#confirm-email").val($("#signup-email").val());
		$("#confirm-NoMobile").val($("#signup-NoMobile").val());
		$("#confirm-NoLandline").val($("#signup-NoLandline").val());
		$("#confirm-username").val($("#signup-username").val());
		$('#main-content').carousel(7);
	});

	$('#confirm-create').on('click', function(){
		$.post("src/signup_post.php", //create a POST request
		{
			signup_firstname: $("#signup-firstname").val(),
			signup_lastname:  $("#signup-lastname").val(),
			signup_email: $("#signup-email").val(),
			signup_username: $("#signup-username").val(),
			signup_password: $("#signup-password").val(),
			signup_mobile: $("#signup-NoMobile").val(),
			signup_landline: $("#signup-NoLandline").val()
		},
		function(data){ //If the POST request was successful, this function is executed.
			try {
  			if (data==1) {
  				//alert("Account created succesfully!");
  			}
			}
				catch (err) {
  			alert(err)
			}
		});

		$.post("src/signup_post.php", //create a POST request
		{
			signup_firstname: $("#signup-firstname").val(),
			signup_lastname:  $("#signup-lastname").val(),
			signup_email: $("#signup-email").val(),
			signup_username: $("#signup-username").val(),
			signup_password: $("#signup-password").val(),
			signup_mobile: $("#signup-NoMobile").val(),
			signup_landline: $("#signup-NoLandline").val()
		},
		function(data){ //If the POST request was successful, this function is executed.
			try {
				if (data==1) {
					alert("Account created succesfully!");
				}
			}
				catch (err) {
				alert(err)
			}
		});
	});

});
