<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$results = update_user_info($_POST["user_id"], $_POST["first_name"], $_POST["last_name"], $_POST["landline"], $_POST["mobile"]);
	if ($results===1){
		echo 1;
	}
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

	function update_user_info($id, $firstname, $lastname, $landline, $mobile) {
		//Getting the connection from above
		global $mysqli;
		//preparing the query and executing the query, first line is the template and the ? will be replaced
		$stmt = $mysqli->prepare ("UPDATE guestinfo SET name_first=?, name_last=?, no_mobile=?, no_landline=? WHERE ID=?");
	  $stmt->bind_param("ssssi", $firstname, $lastname, $landline, $mobile, $id);  //replacing the ? in the query, first param are the type (s for string)
		$stmt->execute(); //executing the query
	  return 1;
	}
?>
