$(document).ready(function () {
	//default values and globalvariables
	var room_id, login, password, submit_mode, reservationID;
	$("#main-content").carousel({interval: 0});
	$('#main-content').carousel('pause');
	$('#room_pax').val(5);
	submit_mode=0;

	check_session(submit_mode);
	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('#navbarNav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	//Navbar book button
	$('#sign-out2').on('click', function(){
		submit_mode = 1;
	});//Navbar book button end

	//Room search
	$('#room_search').on('click', function(){
		search_rooms($("#room_checkindate").val(), $("#room_checkoutdate").val(), $("#room_pax").val());
	}); //room search end

	//dynamic buttons click
	$('#rooms-container').on('click', '.btn', function(){
		room_id = event.target.id;
		find_room_by_id(room_id, 1);
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
		switch (submit_mode) {
			case 1:
				$.post("src/logout.php");
				signup_confirm(submit_mode);
				break;
			default:
				check_session(submit_mode);
		}
	});////Confirmation page

	//Login from navbar
	$("#form_send").click(function() { //When clicking "Sign in" in the login form.
		user_login($("#login_username").val(), $("#login_password").val(), 6, 0);
	}); //login from navbar end

	//Login from booking
	$("#form_send2").click(function() { //When clicking "Sign in" in the login form.
		user_login($("#login_username2").val(), $("#login_password2").val(), 7, 0);
	});//login from booking end

	//sign off from navbar
	$('#navbar-sign-out').on('click', function(){
		check_logout_ui();
		$.post("src/logout.php");
	});//sign off from navbar end

	//sign off from booking
	$('#sign-out2').on('click', function(){
		check_logout_ui();
		$.post("src/logout.php");
	});//sign off from booking end

	$('#navbar-dashboard').on('click', function(event) {
		submit_mode=2;
		check_session(0);
	});

	$('#reservations-container').on('click', '.btn', function(){
		reservationID = $(this).parent().siblings(":first").text();
		switch (submit_mode) {
			case 2:
				$("#main-content").carousel(1);
				$("#book-title").text("UPDATING RESERVATION - STEP 1");
				break;
			case 3:
				reservation_delete(reservationID);
				break;
		}
	});

	$('#dashboard-add-room').on('click', function(){
		$("#main-content").carousel(1);
		submit_mode = 1;
	});

	$('#dashboard-edit-reservation').on('click', function(event) {
		submit_mode = 2
		check_session(0);
	});

	$('#dashboard-cancel-reservation').on('click', function(event) {
		submit_mode=3;
		check_session(submit_mode);
	});


	//user login
	function user_login(user, pass, redirect, action){
		$.post("src/login.php", //create a POST request
		{
			login_username: user, //sending the variable with the username through POST
			login_password: pass //sending the variable with the password through POST
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
				switch (action) {
					case 1: //Creating account and login
						check_session(action);
						break;
					default: //normal login
						check_session(0);
						login = obj.email;
						password = obj.password;
						fill_confirm_view(obj);
						if (redirect!=-1){
							$('#main-content').carousel(redirect);
							$("#main-content").carousel({interval: 0});
							$('#main-content').carousel('pause');
						}
				}
			}
		});
	}//user login end

	//check session
	function check_session(action){
		$.post("src/check_session.php", function(data){
			if(data!=0){
				var obj = jQuery.parseJSON(data);
				switch (action) {
					case 1://reserving room
						reservation_confirm(obj.user_id, room_id, action);
						break;
					case 2://updating room
						reservation_confirm(obj.user_id, room_id, action, reservationID);
						break;
				}
				check_login_ui(obj);
				fill_reservations(obj.user_id, action);
			}
			else {
				session_status= check_logout_ui();
				return session_status;
			}
		});
	}//check session end

	//login ui check
	function check_login_ui(myCallback){
		$('#navbar-sign-out').show();
		$('#navbar-dashboard').show();
		$('#member-area').show();
		$('#login-form').hide();
		$('#navbar-sign-in').hide();
		$('#signup-container').hide();
		$('#signup-or').hide();
		$("#navbar-sign-in-label").text("Welcome, " + myCallback.name + " " + myCallback.last_name);
		$('#login-contact-label').text('RE-ENTER PASSWORD')
		$('#login-contact-label2').text('Current user: ' + myCallback.name + " " + myCallback.last_name);
		$('#login_username2').attr("disabled", true);
		$('#login_username2').val(myCallback.email);
		$('#sign-out2').show();
		var session_status = 1;
		return session_status;
	}//login ui check end

	//logout ui check
	function check_logout_ui(){
		$('#navbar-sign-out').hide();
		$('#navbar-dashboard').hide();
		$('#member-area').hide();
		$('#login-form').show();
		$('#login-form2').show();
		$('#navbar-sign-in').show();
		$('#signup-container').show();
		$('#signup-or').show();
		$('#navbar-sign-in-label').text('Already got a reservation? sign in to check:');
		$('#login-contact-label').text('ALREADY HAVE AN ACCOUNT?')
		$('#login-contact-label2').text('Please sign in');
		$('#login_username2').attr("disabled", false);
		$('#sign-out2').hide();
		var session_status = 0;
		return session_status;
	}//logout ui check end

	//fill confirmation data
	function fill_confirm_view(myCallback){
		$("#confirm-firstname").val(myCallback.name_first);
		$("#confirm-lastname").val(myCallback.name_last);
		$("#confirm-email").val(myCallback.email);
		$("#confirm-NoMobile").val(myCallback.no_mobile);
		$("#confirm-NoLandline").val(myCallback.no_landline);
		$("#confirm-username").val(myCallback.username);
	}//fill confirmation data end

	//searching rooms
	function search_rooms(datein, dateout, num){
		$.post("src/search_room_list.php", //create a POST request
		{
			room_checkindate:  datein, //sending the variable with the password through POST
			room_checkoutdate: dateout,
			room_pax: num
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
  			alert("Something went wrong with your search, verify if the data is correct");
			}
		});
	}//searching room end

	//signup confirm
	function signup_confirm(action){
		//creating new account
		$.post("src/signup.php",{
			signup_firstname: $("#signup-firstname").val(),
			signup_lastname:  $("#signup-lastname").val(),
			signup_email: login,
			signup_username: $("#signup-username").val(),
			signup_password: password,
			signup_mobile: $("#signup-NoMobile").val(),
			signup_landline: $("#signup-NoLandline").val()
		},
		function(){
			switch (action) {
				case 1:
					user_login(login, password, -1, action);
					break;
			}
		});
	}//sign up confirm end

	//creating reservation
	function reservation_confirm(guestid, roomid, action, reservationID){
		switch (action) {
			case 1:
				$.post("src/reservation_confirm.php",
				{
					guest_id: guestid,
					room_id: roomid,
					date_in: $("#room_checkindate").val(),
					date_out: $("#room_checkoutdate").val()
				},
				function(bookdata){
					if (bookdata==1) {
						alert("Reservation succeed");
						clear_all();
						$('#main-content').carousel(6);
						$("#main-content").carousel({interval: 0});
						$('#main-content').carousel('pause');
					}
					else {
						alert("We couldn't process your reservation request, please try again.");
						$('#main-content').carousel(0);
						$("#main-content").carousel({interval: 0});
						$('#main-content').carousel('pause');
					}
				});
				break;
			case 2:
				$.post("src/reservation_update.php",
				{
					reservation_id: reservationID,
					room_id: roomid,
					date_in: $("#room_checkindate").val(),
					date_out: $("#room_checkoutdate").val()
				},
				function(bookdata){
					if (bookdata==1) {
						alert("Reservation update succeed");
						clear_all();
						$('#main-content').carousel(6);
						$("#main-content").carousel({interval: 0});
						$('#main-content').carousel('pause');
					}
					else {
						alert("We couldn't process your update request, please try again.");
						$('#main-content').carousel(0);
						$("#main-content").carousel({interval: 0});
						$('#main-content').carousel('pause');
					}
				});
				break;
		}
		submit_mode = 0;
		check_session(submit_mode);
	}//creating reservation end

	function reservation_delete(resID){
		var del = confirm("Are you sure you want to cancel this reservation?");
		if (del==true) {
			$.post("src/reservation_delete.php",{
				res_id: resID
			},
			function(data){
				if (data!=0) {
					$('#dashboard-cancel-reservation').click();
					alert("The reservation was canceled");
				}
				else {
					alert("There was an issue with your request, please try again");
					check_session(0);
				}
			});
		}
	}

	//fill reservation tables
	function fill_reservations(guestid, action){
		var buttonClass, buttonText;
		switch (action) {
			case 3:
				buttonClass = "btn-danger";
				buttonText = "Cancel";
				break;
			default:
				buttonClass = "btn-primary";
				buttonText = "Edit";
		}
		$.post("src/reservation_list.php",{
			user_id: guestid
		},
		function(data){
			if (data!=0) {
				$('#reservations-container').empty();
				var obj = jQuery.parseJSON(data);
				$.each(obj, function(key, value) {
					var status;
					if (value.status==1) status="Approved";
					else status = "Waiting";
					$('#reservations-container').append(`
					<tr>
						<td id="">`+ value.ID + `</td>
						<td id="reservation-room-name-`+key+`"></td>
						<td id="reservation-num-people-`+key+`"></td>
						<td id="reservation-price-`+key+`"></td>
						<td>`+ value.date_in + `</td>
						<td>`+ value.date_out + `</td>
						<td>`+ status + `</td>
						<td><button class="btn btn-lg ` + buttonClass + ` btn-block" type="button">` + buttonText + `</button></td>
					</tr>`);
					find_room_by_id(value.room_id, 2, key);
				});
			}
		});
	}//fill reservation tables end

	//find room
	function find_room_by_id(roomid, action, key){
		$.post("src/find_room_id.php", //create a POST request
		{
			room_id: roomid
		},
		function(data){
			try {
				var obj = jQuery.parseJSON(data);
				switch (action) {
					case 1: //filling confirmation page
						$('#confirm-card-title').text(obj.room_name + " #" + obj.room_accommodation_num);
						$('#confirm-card-description').text(obj.room_desc);
						$('#confirm-card-price').text(obj.price);
						$('#confirm-card-numpeople').text(obj.room_num);
						$("#confirm-create").attr("disabled", false);
						break;
					case 2://Filling dashboard reservations
						$('#reservation-room-name-'+key).text(obj.room_name + " #" + obj.room_accommodation_num);
						$('#reservation-num-people-'+key).text(obj.room_num);
						$('#reservation-price-'+key).text(obj.price);
						break
				}
			}
			catch (err) {
  			alert("There was an issue with your request, please check if the information is valid");
			}
		});
	};//find room end

	function clear_all(){
		$('#rooms-container').empty();
		$("#confirm-firstname").empty();
		$("#confirm-lastname").empty();
		$("#confirm-email").empty();
		$("#confirm-NoMobile").empty();
		$("#confirm-NoLandline").empty();
		$("#confirm-username").empty();

		$('#confirm-card-title').empty();
		$('#confirm-card-description').empty();
		$('#confirm-card-price').empty();
		$('#confirm-card-numpeople').empty();

		$("#signup-firstname").empty(),
		$("#signup-lastname").empty(),
		$("#signup-email").empty(),
		$("#signup-username").empty(),
		$("#signup-password").empty(),
		$("#signup-repassword").empty(),
		$("#signup-NoMobile").empty(),
		$("#signup-NoLandline").empty()
	}
});//Document.ready end

//var d = new Date();
//var month = d.getMonth()+1;
//var day = d.getDate();

//var output = d.getFullYear() + '/' +
	//((''+month).length<2 ? '0' : '') + month + '/' +
	//((''+day).length<2 ? '0' : '') + day;


//$('#room_checkindate').val("02-01-2020");
