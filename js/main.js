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
  });
  ////////////////////////////////////////////////////////////////////

  //CLICKS
  $("#login-btn").click(function() { //When clicking "Sign in" in the login form.
    user_login($("#login_username").val(), $("#login_password").val(), 6, 0);
  }); //login from navbar end

  $('#nav-signout-btn').on('click', function(){
		check_logout_ui();
		clear_all(1);
		$.post("src/logout.php");
    $('#home-section').fadeIn(500).siblings().hide();
	});//sign off from navbar end

  //Room search
	$('#room_search').on('click', function(){
		search_rooms($("#room_checkindate").val(), $("#room_checkoutdate").val(), $("#room_pax").val());
	}); //room search end

  //Room cards button
  $('#rooms-container').on('click', '.btn', function(){
		//room_id = event.target.id;
    $('#sign-up-section').fadeIn(500).siblings().hide();
	});//Rooms card button end

  ////////////////////////////////////////////////////////////////////
  var date1 = new Date();
  date1.setDate(date1.getDate()+1);
  
  var d = new Date();
  var now = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()+1);
  $('#startDate').datepicker('update', now);


  $('#room_checkindate').datepicker({
      startDate: date1,
      autoclose: true
  }).on("changeDate", function(e){
<<<<<<< Updated upstream
    var d= new Date(e.date);
    console.log (d.getDate())

    $("#room_checkoutdate").datepicker("setStartDate", e.date);
    $('#room_checkoutdate').datepicker('update', e.date);
    console.log (e);
  });

  $('#room_checkoutdate').datepicker({
=======
    var d = new Date(moment(e.date).add(1, 'd'));
    $("#room_checkoutdate").datepicker("setStartDate", d);
    $('#room_checkoutdate').datepicker('update', d);
  });

  $('#room_checkoutdate').datepicker({
      setStartDate: '1d',
>>>>>>> Stashed changes
      autoclose: true
  })

});
