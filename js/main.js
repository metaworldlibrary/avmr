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
      $.post("src/logout.php");
        signup_confirm(1);
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
      }
    });

  }); //upload file end

  ////////////////////////////////////////////////////////////////////
<<<<<<< HEAD


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
          user_login(login, password, -1, action);
          break;
      }
    });
  }//sign up confirm end
=======
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
  })

>>>>>>> 5364ccb5b000a6d7bcae1a0bb1f6f0c4d7be4bd5
});
