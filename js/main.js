$(document).ready(function () {
  //DEFAULT VALUES
  var room_id, login, password, submit_mode, reservationID;
	$('#home-section').show().siblings().hide();
	$('#room_pax').val(5);
	submit_mode=0;
	check_session(submit_mode);
  ////////////////////////////////////////////////////////////////////

  //REDIRECTS
  $('#nav-brand').on('click', function(){
    $('#home-section').fadeIn(500).siblings().hide();
  });

  $('#nav-home').on('click', function(){
    $('#home-section').fadeIn(500).siblings().hide();
  });

  $('#nav-book').on('click', function(){
    submit_mode = 1;
    $("#book-title").text("CREATING RESERVATION");
    $('#book-section').fadeIn(500).siblings().hide();
  });

  $('#nav-activities').on('click', function(){
    $('#activities-section').fadeIn(500).siblings().hide();
  });

  $('#nav-about').on('click', function(){
    $('#about-section').fadeIn(500).siblings().hide();
  });

  $('#nav-contact').on('click', function(){
    $('#contact-section').fadeIn(500).siblings().hide();
  });

  $('#nav-book-btn').on('click', function(){
    $('#book-section').fadeIn(500).siblings().hide();
  });

  $('#nav-signin-btn').on('click', function(){
    $('#login-section').fadeIn(500).siblings().hide();
  });

  $('#nav-db-btn').on('click', function(){
    $('#dashboard-section').fadeIn(500).siblings().hide();
    submit_mode=2;
		//check_session(0);
  });

////DASHBOARD REDIRECTS
$('#dashboard-add-room').on('click', function(){
  $('#book-section').fadeIn(500).siblings().hide();
});

$('#dashboard-reservation-list').on('click', function(){
    $('#dashboard-section').fadeIn(500).siblings().hide();
  });


  $('#dashboard-edit-info').on('click', function(){
    $('#dashboard-account-section').fadeIn(500).siblings().hide();
    $('#dashboard-info-container').fadeIn(500).siblings().hide();
  });

  $('#dashboard-edit-username').on('click', function(){
    $('#dashboard-account-section').fadeIn(500).siblings().hide();
    $('#dashboard-credentials-container').fadeIn(500).siblings().hide();
  });

  $('#dashboard-edit-password').on('click', function(){
    $('#dashboard-account-section').fadeIn(500).siblings().hide();
    $('#dashboard-password-container').fadeIn(500).siblings().hide();
  });


  ////////////////////////////////////////////////////////////////////

  //CLICKS
  $("#login-btn").click(function() { //When clicking "Sign in" in the login form.
    user_login($("#login_username").val(), $("#login_password").val(), 0);
  }); //login from navbar end

  $("#login-btn2").click(function() { //When clicking "Sign in" in the login form.
		user_login($("#login_username2").val(), $("#login_password2").val(), 0);
    $('#confirmation').fadeIn(500).siblings().hide();
	});//login from booking end

  $('#nav-signout-btn').on('click', function(){
		check_logout_ui();
		clear_all(1);
		$.post("src/logout.php");
    $('#home-section').fadeIn(500).siblings().hide();
	});//sign off from navbar end

  $('#sign-out2').on('click', function(){
		check_logout_ui();
		clear_all(1);
		$.post("src/logout.php");
  });

  //Room search
	$('#room_search').on('click', function(){
		search_rooms($("#room_checkindate").val(), $("#room_checkoutdate").val(), $("#room_pax").val());
	}); //room search end

  //Room cards button
  $('#rooms-container').on('click', '.btn', function(){
		room_id = event.target.id;
    $('#sign-up-section').fadeIn(500).siblings().hide();
    $("#confirmation-card-img").attr("src", $("#room-picture-"+ room_id).attr("src"));
    $("#confirmation-card-title").text($("#room-title-"+ room_id).text());
    $("#confirmation-card-desc").text($("#room-desc-"+ room_id).text());
    $("#confirmation-card-price").text($("#opt-"+ room_id).text());
    $("#confirmation-card-price").val($("#opt-"+ room_id).val());
	});//Rooms card button end

  $('#signup-create').on('click', function(){
		login = $("#signup-email").val();
		password = $("#signup-password").val();
		$("#confirm-firstname").val($("#signup-firstname").val());
		$("#confirm-lastname").val($("#signup-lastname").val());
		$("#confirm-email").val($("#signup-email").val());
		$("#confirm-NoMobile").val($("#signup-NoMobile").val());
		$("#confirm-NoLandline").val($("#signup-NoLandline").val());
		$("#confirm-username").val($("#signup-username").val());
		$('#confirmation').fadeIn(500).siblings().hide();
		submit_mode = 1;
	});//send contact info to confirmation page end


  $('#reservations-container').on('click', '.upload-reservation', function(){
    //room_id = event.target.id;
    //var button = $(event.relatedTarget) // Button that triggered the modal
  });

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

  //upload file
  $('#file-upload-btn').on('click', function(){
    var postData = new FormData();
    postData.append('file', $("#file-input")[0].files[0]);
    $.ajax({
      type:'POST',
      url:'src/upload_file.php',
      processData: false,
      contentType: false,
      data : postData,
      success:function(data){
        console.log("File Uploaded");
        $('#upload-modal').modal('hide');
      }
    });

  }); //upload file end


  ////////////////////////////////////////////////////////////////////

  function signup_confirm(action){
    //creating new account
    $.post("src/signup.php",{
      signup_firstname: $("#signup-firstname").val(),
      signup_lastname:  $("#signup-lastname").val(),
      signup_email: login,
      signup_username: $("#signup-username").val(),
      signup_password: password,
      signup_mobile: $("#signup-NoMobile").val(),
    },
    function(){
      switch (action) {
				case 1:
					user_login(login, password, action);
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
          }
          else {
            alert("We couldn't process your reservation request, please try again.");
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

  //user login
  function user_login(user, pass, action){
    $.post("src/login.php", //create a POST request
    {
      login_username: user, //sending the variable with the username through POST
      login_password: pass //sending the variable with the password through POST
    },
    function(data){ //If the POST request was successful, this function is executed.
      if (data == "username") { //checking the data, 0= failed login
        alert("Username not found");
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
            login = obj.ID;
            password = obj.password;
            fill_confirm_view(obj);
            fill_dashboard_view(obj);
        }
      }
    });
  }//user

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
          case 4://
            find_user_by_id(obj.user_id, 2);
            break;
          case 5:
            find_user_by_id(obj.user_id, 3);
            break;
          case 6:
            find_user_by_id(obj.user_id, 4);
            break;
          default:
            check_login_ui(obj);
            fill_reservations(obj.user_id, action);
            find_user_by_id(obj.user_id, 1);
        }
      }
      else {
        session_status= check_logout_ui();
        return session_status;
      }
    });
  }//check session end

  var date1 = new Date();
  date1.setDate(date1.getDate()+1);

  var d = new Date();
  var now = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()+1);
  $('#startDate').datepicker('update', now);


  $('#room_checkindate').datepicker({
      startDate: date1,
      autoclose: true
  }).on("changeDate", function(e){

    var d = new Date(moment(e.date).add(1, 'd'));
    $("#room_checkoutdate").datepicker("setStartDate", d);
    $('#room_checkoutdate').datepicker('update', d);
  });

  $('#room_checkoutdate').datepicker({
      setStartDate: '1d',
      autoclose: true
  });


});
