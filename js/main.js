$(document).ready(function () {
	//default values and globalvariables
	var room_id, login, password;

	$("#main-content").carousel({interval: false});
	$('#main-content').carousel('pause');
	$('#room_pax').val(5);

	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('#navbarNav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	//Room search
	$('#room_search').on('click', function(){
		$.post("src/search_room_list.php", //create a POST request
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
	}); //room search end

	//dynamic buttons click
	$('#rooms-container').on('click', '.btn', function(){
		room_id = event.target.id;
		$.post("src/find_room_id.php", //create a POST request
		{
			room_id: room_id
		},
		function(data){
			try {
				var obj = jQuery.parseJSON(data);
  			$('#confirm-card-title').text(obj.room_name + " #" + obj.room_accommodation_num);
				$('#confirm-card-description').text(obj.room_desc);
				$('#confirm-card-price').text(obj.price);
				$('#confirm-card-numpeople').text(obj.room_num);
				$("#confirm-create").attr("disabled", false);
			}
			catch (err) {
  			alert(err);
			}
		});
	});//dynamic buttons click end

	//send contact info to confirmation page
	$('#signup-create').on('click', function(){
		login = $("#signup-email").val();
		password = $("#signup-password").val();
		$("#confirm-firstname").val($("#signup-firstname").val());
		$("#confirm-lastname").val($("#signup-lastname").val());
		$("#confirm-email").val($("#signup-email").val());
		$("#confirm-NoMobile").val($("#signup-NoMobile").val());
		$("#confirm-NoLandline").val($("#signup-NoLandline").val());
		$("#confirm-username").val($("#signup-username").val());
		$('#main-content').carousel(7);
	});//send contact info to confirmation page end

	//Confirmation page
	$('#confirm-create').on('click', function(){
		$("#confirm-create").attr("disabled", true);
		//creating new account
		$.post("src/signup.php",
		{
			signup_firstname: $("#signup-firstname").val(),
			signup_lastname:  $("#signup-lastname").val(),
			signup_email: login,
			signup_username: $("#signup-username").val(),
			signup_password: password,
			signup_mobile: $("#signup-NoMobile").val(),
			signup_landline: $("#signup-NoLandline").val()
		},
		function(data){
			try {//Post request to login
  			if (data==1) {
					$.post("src/login.php",
					{
						login_username: login, //sending the variable with the username through POST
						login_password: password //sending the variable with the password through POST
					},
					function(logindata){ //logged with new account
						if (logindata != "username" && logindata != "password") {
							var obj = jQuery.parseJSON(logindata);
							$('#navbar-sign-out').show();
							$('#navbar-dashboard').show();
							$('#member-area').show();
							$('#login-form').hide();
							$('#navbar-sign-in').hide();
							$('#navbar-sign-in-label').text('Welcome, ' + obj.name_first + ' ' + obj.name_last);

							//creating reservation
							$.post("src/reservation_confirm.php",
							{
								guest_id: obj.ID,
								room_id: room_id,
								date_in: $("#room_checkindate").val(),
								date_out: $("#room_checkoutdate").val()
							},
							function(bookdata){
									if (bookdata==1) {
										alert("Reservation succeed");
										$('#main-content').carousel(6);
									}
									else {
										alert("We couldn't process your reservation request, please try again.");
										$('#main-content').carousel(0);
									}
							});//creating reservation end
						}//logged with new accout
						else {
							alert("There was a problem trying to access to your account, try to login first before booking a room.");
						}
					});
  			}//Post request to login end
			}//login after creating account end
			catch (err) {
  			alert("There was an error with the system during the reservation process, please try again");
			}
		});//creating new account end
	});////Confirmation page

	//Login from navbar
	$("#form_send").click(function() { //When clicking "Sign in" in the login form.
		$.post("src/login.php", //create a POST request
		{
			login_username: $("#login_username").val(), //sending the variable with the username through POST
			login_password: $("#login_password").val() //sending the variable with the password through POST
		},
		function(data){ //If the POST request was successful, this function is executed.
			if (data == "username") { //checking the data, 0= failed login
				alert("Username or email not found");
				return;
			}
			else if (data=="password"){
				alert("The password didn't match");
				return;
			}
			else {
				var obj = jQuery.parseJSON(data);
				login = obj.email;
				password = obj.password;
				$('#navbar-sign-out').show();
				$('#navbar-dashboard').show();
				$('#member-area').show();
				$('#login-form').hide();
				$('#navbar-sign-in').hide();
				$('#navbar-sign-in-label').text('Welcome, ' + obj.name_first + ' ' + obj.name_last);
			}
		});
	}); //login from navbar end

	//Login from booking
	$("#form_send2").click(function() { //When clicking "Sign in" in the login form.
		$.post("src/login.php", //create a POST request
		{
			login_username: $("#login_username2").val(), //sending the variable with the username through POST
			login_password: $("#login_password2").val() //sending the variable with the password through POST
		},
		function(data){ //If the POST request was successful, this function is executed.
			if (data == "username") { //checking the data, 0= failed login
				alert("Username or email not found");
				return;
			}
			else if (data=="password"){
				alert("The password didn't match");
				return;
				}
			else {
				var obj = jQuery.parseJSON(data);
				login = obj.email;
				password = obj.password;
				$('#navbar-sign-out').show();
				$('#navbar-dashboard').show();
				$('#member-area').show();
				$('#login-form').hide();
				$('#navbar-sign-in').hide();
				$('#navbar-sign-in-label').text('Welcome, ' + obj.name_first + ' ' + obj.name_last);

				$("#confirm-firstname").val(obj.name_first);
				$("#confirm-lastname").val(obj.name_last);
				$("#confirm-email").val(obj.email);
				$("#confirm-NoMobile").val(obj.no_mobile);
				$("#confirm-NoLandline").val(obj.no_landline);
				$("#confirm-username").val(obj.username);
				$('#main-content').carousel(7);
			}
		});
	});//login from booking end

	//sign off from the navbar
	$('#navbar-sign-out').on('click', function(){
		$('#navbar-sign-out').hide();
		$('#navbar-dashboard').hide();
		$('#member-area').hide();
		$('#login-form').show();
		$('#login-form2').show();
		$('#navbar-sign-in').show();
		$('#navbar-sign-in-label').text('Already got a reservation? sign in to check:');
	});//sing off from navbar end
});//Document.ready end

//var d = new Date();
//var month = d.getMonth()+1;
//var day = d.getDate();

//var output = d.getFullYear() + '/' +
	//((''+month).length<2 ? '0' : '') + month + '/' +
	//((''+day).length<2 ? '0' : '') + day;


//$('#room_checkindate').val("02-01-2020");
