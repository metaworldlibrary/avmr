<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$results = update_user_credentials($_POST["user_id"], $_POST["email"], $_POST["username"], $_POST["password"]);
	if ($results===1){
		echo 1;
	}
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

	function update_user_credentials($id, $email, $username, $password) {
		//Getting the connection from above
		global $mysqli;
	  $stmt = $mysqli->prepare ("UPDATE guestinfo SET email=?, username=? WHERE ID=?");
	  $stmt->bind_param("ssi", $email, $username, $id);  //replacing the ? in the query, first param are the type (s for string)

	  $userData = find_user_by_id($id);
	  if ($password<>$userData["password"])
	    exit("old_missmatch");
	  $stmt->execute(); //executing the query
	  return 1;
	}
?>
