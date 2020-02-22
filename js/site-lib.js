//FUNCTIONS
function fill_reservations(guestid, action){
  $.post("src/reservation_list.php", {
    user_id:guestid
  },
  function(data){
    if (data!=0) {
      $('#reservations-container').empty();
      var obj = jQuery.parseJSON(data);
      $.each(obj, function(key, value) {
        var status, editbutton;
        if (value.status==1){
          status="Approved";
          editbutton = `<td><button class="edit-reservation btn btn-lg btn-primary btn-block" type="button">Edit</button></td>`;
        }
        else{
          status = "Waiting";
          editbutton = `<td><button class="edit-reservation btn btn-lg btn-primary btn-block" type="button" disabled >Edit</button></td>`;
        }

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
          <td>`+ value.reservation_code +`</td>

          <td><button class="upload-reservation btn btn-lg btn-primary btn-block" type="button" data-toggle="modal" data-target="#upload-modal" data-whatever="@mdo">Upload</button></td>
          `+editbutton+`
          <td><button class="del-reservation btn btn-lg btn-danger btn-block" type="button">Cancel</button></td>
        </tr>`);
        find_room_by_id(value.room_id, 2, key);
        find_user_by_id(value.guest_id, 1, key);
      });
    }
  });
}
//fill reservation tables end

//fill confirmation data
function fill_confirm_view(myCallback){
  $("#confirm-firstname").val(myCallback.name_first);
  $("#confirm-lastname").val(myCallback.name_last);
  $("#confirm-email").val(myCallback.email);
  $("#confirm-NoMobile").val(myCallback.no_mobile);
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
  $('#room-type-table').empty();
  $("#confirm-firstname").empty();
  $("#confirm-lastname").empty();
  $("#confirm-email").empty();
  $("#confirm-NoMobile").empty();
  $("#confirm-username").empty();

  $('#confirmation-card-title').empty();
  $('#confirmation-card-desc').empty();
  $('#confirmation-card-price').empty();
  $('#confirmation-card-img').empty();

  $("#signup-firstname").empty();
  $("#signup-lastname").empty();
  $("#signup-email").empty();
  $("#signup-username").empty();
  $("#signup-password").empty();
  $("#signup-repassword").empty();
  $("#signup-NoMobile").empty();
  if (num==1) {
    $("#reservations-container").empty();
    $("#dashboard-firstname").empty();
    $("#dashboard-lastname").empty();
    $("#dashboard-phone").empty();
    $("#dashboard-mobile").empty();
    $("#dashboard-credentials-username").empty();
    $("#dashboard-credentials-email").empty();
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
          <img class="card-img-top" id="room-picture-`+ value.id +`" src="` + value.card_picture + `" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" id="room-title-`+ value.id +`">` + value.room_name + `</h5>
            <p class="card-text" id="room-desc-`+ value.id +`">` + value.room_type_desc + `</p>
            <div class="input-group">
              <select class="custom-select" id="price-package-`+ value.id +`">

              </select>
              <div class="input-group-append">
                <button class="btn btn-success" type="button" id="` + value.id + `">Book</button>
              </div>
            </div>
          </div>
          <div class="card-footer text-center">
            <input type="hidden" value="` + value.id + `">
            <a class="font-weight-bold" id="rleft-`+ value.id +`">ROOMS LEFT: ` + value.number_of_rooms + `</a>
          </div>
        </div>`;
        //<a class="btn btn-success text-white" data-toggle="modal" data-target="#upload-modal" data-whatever="@mdo">Details</a>
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
        option= '<option id="opt-'+typeid+'" selected value="'+value.price+'">'+value.max_people+' people for $'+value.price+'</option>';
      else
        option= '<option id="opt-'+typeid+'" value="'+value.price+'">'+value.max_people+' people for $'+value.price+'</option>';
      $('#price-package-'+ typeid).append(option);
    });
  });
}



////////////////////////////////////////////////////////////////////////////////
