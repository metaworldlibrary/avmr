<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$results = update_user_password($_POST["user_id"], $_POST["currentpass"], $_POST["newpass"], $_POST["repassword"]);
	if ($results===1){
		echo 1;
	}
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

	function update_user_password($id, $currpass, $newpass, $repass) {
		//Getting the connection from above
		global $mysqli;
	  $stmt = $mysqli->prepare ("UPDATE guestinfo SET password=? WHERE ID=?");
	  $stmt->bind_param("si", $newpass, $id);  //replacing the ? in the query, first param are the type (s for string)

	  $userData = find_user_by_id($id);
	  if ($newpass<>$userData["password"])
	    exit("old_missmatch");
	  if ($newpass<>$repass)
	    exit("new_mismatch");
	  $stmt->execute(); //executing the query
	  return 1;
	}
?>
