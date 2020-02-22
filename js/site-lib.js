//FUNCTIONS

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
          password = obj.staff_pass;
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

//fill reservation tables
function fill_reservations(guestid, action){
  $.post("src/reservation_list.php", {
    user_id:guestid
  },
  function(data){
    if (data!=0) {
      $('#reservations-container').empty();
      var obj = jQuery.parseJSON(data);
      $.each(obj, function(key, value) {
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        var status, button;
        if (value.status==1) {
          status="Approved";
          button='<button class="edit-reservation btn btn-lg btn-primary btn-block" type="button">Edit</button>';
        }
        else {
          status = "Waiting";
          button ='<button class="edit-reservation btn btn-lg btn-primary btn-block" type="button" disabled>Edit</button>'
        }
=======
=======
>>>>>>> Stashed changes
>>>>>>> parent of f8166ee... fixed datepicker bug
        var status, editbutton;
        if (value.status==1){
          status="Approved";
          editbutton = `<td><button class="edit-reservation btn btn-lg btn-primary btn-block" type="button">Edit</button></td>`;
        } 
        else{
          status = "Waiting";
          editbutton = `<td><button class="edit-reservation btn btn-lg btn-primary btn-block" type="button" disabled >Edit</button></td>`;
        } 
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> parent of f8166ee... fixed datepicker bug
        $('#reservations-container').append(`
        <tr>
          <td id="">`+ value.ID + `</td>
          <td id="reservation-room-name-`+key+`"></td>
          <td id="reservation-guest-name-`+key+`"></td>
          <td id="reservation-num-people-`+key+`"></td>
          <td id="reservation-price-`+key+`"></td>
          <td>`+ value.date_in + `</td>
          <td>`+ value.date_out + `</td>
          <td>`+ status + `</td>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <td>`+ button +`</td>
=======
=======
>>>>>>> Stashed changes
>>>>>>> parent of f8166ee... fixed datepicker bug
          <td>`+ value.reservation_code +`</td>
          <td><button class="upload-reservation btn btn-lg btn-primary btn-block" type="button">Upload</button></td>
          `
          +editbutton+
          `
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> parent of f8166ee... fixed datepicker bug
          <td><button class="del-reservation btn btn-lg btn-danger btn-block" type="button">Cancel</button></td>
        </tr>`);
        find_room_by_id(value.room_id, 2, key);
        find_user_by_id(value.guest_id, 1, key);
      });
    }
  });
}//fill reservation tables end

//fill confirmation data
function fill_confirm_view(myCallback){
  $("#confirm-firstname").val(myCallback.name_first);
  $("#confirm-lastname").val(myCallback.name_last);
  $("#confirm-email").val(myCallback.email);
  $("#confirm-NoMobile").val(myCallback.no_mobile);
  $("#confirm-NoLandline").val(myCallback.no_landline);
  $("#confirm-username").val(myCallback.username);
}//fill confirmation data end

function find_user_by_id(userID, action, key){
  $.post("src/find_user_by_id.php",{
      user_id: userID
    }, function(data){
      if (data!=0) {
        var obj=jQuery.parseJSON(data);
        switch (action) {
          case 1:
            $("#reservation-guest-name-"+key).text(obj.name_first + " " + obj.name_last);
            break;
          case 2:
            update_info(obj.ID, $("#dashboard-firstname").val(), $("#dashboard-lastname").val(), $("#dashboard-phone").val(), $("#dashboard-mobile").val());
            break;
          case 3:
            update_credentials(obj.ID, $("#dashboard-credentials-username").val(), $("#dashboard-credentials-email").val(), $("#dashboard-credentials-password").val());
            break;
          case 4:
            update_password(obj.ID, $("#dashboard-password-current").val(), $("#dashboard-password-new").val(), $("#dashboard-password-renew").val());
            break;
        }
      }
      else {
        alert("There was an issue trying to retrieve your data");
      }
    });
  }

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

//login ui check
function check_login_ui(myCallback){
  $('#nav-signout-btn').show();
  $('#nav-db-btn').show();
  $('#dashboard-section').hide();
  $('#login-form').hide();
  $('#nav-signin-btn').hide();
  $('#signup-container').hide();
  $('#signup-or').hide();
  $("#nav-signin-label").text("Welcome, " + myCallback.name + " " + myCallback.last_name);
  $('#login-contact-label').text('RE-ENTER PASSWORD')
  $('#login-contact-label2').text('Current user: ' + myCallback.name + " " + myCallback.last_name);
  $('#login_username2').attr("disabled", true);
  $('#login_username2').val(myCallback.email);
  $('#sign-out2').show();
}//login ui check end

//logout ui check
function check_logout_ui(){
  $('#nav-signout-btn').hide();
  $('#nav-db-btn').hide();
  $('#dashboard-section').hide();
  $('#login-form').show();
  $('#nav-signin-btn').show();
  $('#signup-container').show();
  $('#signup-or').show();
  $('#nav-signin-label').text('Already have a reservation?, sign in and check');
}//logout ui check end

//clear page fields
function clear_all(num){
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
  if (num==1) {
    $("#reservations-container").empty()
    $("#dashboard-firstname").empty()
    $("#dashboard-lastname").empty()
    $("#dashboard-phone").empty()
    $("#dashboard-mobile").empty()
    $("#dashboard-credentials-username").empty()
    $("#dashboard-credentials-email").empty()
  }
}//clear page fields

//Find room
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
}//find room end

//filling_dashboard fields
function fill_dashboard_view(myCallback){
  $("#dashboard-firstname").val(myCallback.name_first);
  $("#dashboard-lastname").val(myCallback.name_last);
  $("#dashboard-phone").val(myCallback.no_landline);
  $("#dashboard-mobile").val(myCallback.no_mobile);
  $("#dashboard-credentials-username").val(myCallback.username);
  $("#dashboard-credentials-email").val(myCallback.email);
}//filling_dashboard fields

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
      var rooms = $('#room-type-table');
      rooms.hide().empty();
      var cards = $();
      $.each(obj, function(key, value) {
        cards =
        `<div class="card">
          <img class="card-img-top" src="` + value.card_picture + `" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">` + value.room_name + `</h5>
            <p class="card-text">` + value.room_type_desc + `</p>
            <div class="input-group">
              <select class="custom-select" id="price-package-`+ value.id +`">

              </select>
              <div class="input-group-append">
                <button class="btn btn-success" type="button">Book</button>
              </div>
            </div>
          </div>
          <div class="card-footer text-center">
            <input type="hidden" value="` + value.id + `">
            <a class="font-weight-bold">ROOMS LEFT: ` + value.number_of_rooms + `</a>
          </div>
        </div>`;
        //<a class="btn btn-success text-white" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Details</a>
        rooms.append(cards).fadeIn(500);
        price_pack_fill(value.id, datein, dateout, num);
      });
    }
      catch (err) {
      alert("Something went wrong with your search, verify if the data is correct");
    }
  });
}//searching room end

function price_pack_fill(typeid, datein, dateout, num){
  $.post("src/search_price_package.php",
  {
    type_id: typeid,
    room_checkindate: datein,
    room_checkoutdate: dateout,
    room_pax: num
  },
  function(data){
    var obj = jQuery.parseJSON(data);
    $.each(obj, function(key, value) {
      var option;
      if (key==0)
        option= '<option selected value="'+value.price+'">'+value.max_people+' people for $'+value.price+'</option>';
      else
        option= '<option value="'+value.price+'">'+value.max_people+' people for $'+value.price+'</option>';
      $('#price-package-'+ typeid).append(option);
    });

  });
}

////////////////////////////////////////////////////////////////////////////////
