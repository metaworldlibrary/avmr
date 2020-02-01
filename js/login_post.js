$(document).ready(function () {		
	//AJAX JQuery script to send a POST request
	//Quick test values
	//Username: drogister0@umn.edu or drogister0
	//Password: sN525spWNc	
	$("#form_send").click(function() { //When clicking "Sign in" in the login form.
		var login_user = $("#login_username").val(); //getting the current username value into a variable		
		var login_pass = $("#login_password").val(); //getting the current password value into a variable
		$.post("src/login_post.php", //create a POST request
		{
			login_username: login_user, //sending the variable with the username through POST
			login_password: login_pass //sending the variable with the password through POST
		},
		function(data){ //If the POST request was successful, this function is executed.
			if (data != 0) { //checking the data, 0= failed login
				$('#navbar-sign-out').show();
				$('#navbar-dashboard').show();
				$('#member-area').show();
				$('#login-form').hide();
				$('#navbar-sign-in').hide();
				$('#navbar-sign-in-label').text('Welcome, ' + data);
			} 
			else {//failed login (returned 0)
				if (login_pass!="") alert ("Incorrect username or password");
			}
		});
	});	
	
	$('#navbar-sign-out').on('click', function(){
		$('#navbar-sign-out').hide();
		$('#navbar-dashboard').hide();
		$('#member-area').hide();
		$('#login-form').show();
		$('#navbar-sign-in').show();
		$('#navbar-sign-in-label').text('Already got a reservation? sign in to check:');
	});
});