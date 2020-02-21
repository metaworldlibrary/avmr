<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done
	$results= userlogin($_POST["login_username"], $_POST["login_password"]);
	if (count($results)>0){
		$_SESSION["user_id"] = $results["ID"]; //creates SESSION variable with the ID.
		$_SESSION["name"] = $results["name_first"]; //creates SESSION variable with the name in it.
		$_SESSION["last_name"] = $results["name_last"]; //creates SESSION variable with the last name in it.
		$_SESSION["email"] = $results["email"]; //creates SESSION variable with the last name in it.
		echo json_encode($results, JSON_FORCE_OBJECT);
	}
	else {
		echo 0;
	}
	$mysqli -> close();//closing database connection

	//Login function
	function userlogin($login, $password) {
		//Getting the connection from above
		global $mysqli;
		//preparing the query and executing the query, first line is the template and the ? will be replaced
		$stmt = $mysqli->prepare ("SELECT * FROM guestinfo WHERE email= ?  OR username= ?");
	  $stmt->bind_param("ss", $login, $login);  //replacing the ? in the query, first param are the type (s for string)
		$stmt->execute(); //executing the query

	  $result = $stmt->get_result(); //getting results
		if ($result->num_rows === 0) //no results means not registered
	    exit("username"); //exit the script and sends a message

		$row = $result->fetch_assoc();//converts result into an associative array
		if (!($row["password"] === $password))//compares the passwords
	    exit("password");//exit the script and sends a message

	  return $row; //returning 1 since everything was successful
	}
?>
