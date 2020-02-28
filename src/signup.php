<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$results = create_user($_POST["signup_firstname"], $_POST["signup_lastname"], $_POST["signup_email"], $_POST["signup_username"], $_POST["signup_password"], $_POST["signup_mobile"]);
	if ($results===1){
		echo 1;
	}
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

	function create_user($name, $lastname, $email, $username, $password, $mobile) {
		//Getting the connection from above
		global $mysqli;
		//preparing the query and executing the query, first line is the template and the ? will be replaced
		$stmt = $mysqli->prepare ("INSERT INTO guestinfo (name_first, name_last, email, username, password, no_mobile) VALUES (?,?,?,?,?,?)");
	  $stmt->bind_param("ssssss", $name, $lastname, $email, $username, $password, $mobile);
		$stmt->execute(); //executing the query
	  return 1;
	}
?>
