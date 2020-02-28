<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$results = create_user($_POST["signup_firstname"], $_POST["signup_lastname"], $_POST["signup_email"], $_POST["signup_username"], $_POST["signup_password"], $_POST["signup_mobile"], $_POST["signup_landline"]);
	if ($results===1){
		echo 1;
	}
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

	function create_user($name, $lastname, $email, $username, $password, $mobile, $landline) {
		//Getting the connection from above
		global $mysqli;
		//preparing the query and executing the query, first line is the template and the ? will be replaced
		$stmt = $mysqli->prepare ("INSERT INTO guestinfo (name_first, name_last, email, username, password, no_mobile, no_landline) VALUES (?,?,?,?,?,?,?)");
	  $stmt->bind_param("sssssss", $name, $lastname, $email, $username, $password, $mobile, $landline);  //replacing the ? in the query, first param are the type (s for string)
		$stmt->execute(); //executing the query
	  return 1;
	}
?>
