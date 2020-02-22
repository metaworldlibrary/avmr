<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$results = find_room_by_id($_POST['room_id']);
	if (count ($results)>0){
		echo json_encode($results, JSON_FORCE_OBJECT); //converts the result from array to JSON
	}
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

	function find_room_by_id($id) {
		//Getting the connection from above
		global $mysqli;
		//preparing the query and executing the query, first line is the template and the ? will be replaced
		$stmt = $mysqli->prepare (
			"SELECT
			    accommodationtype.room_name,
			    accommodationinfo.room_accommodation_num,
			    accommodationinfo.price,
			    accommodationinfo.room_desc,
			    accommodationinfo.room_num
			FROM
			    accommodationinfo
			INNER JOIN accommodationtype ON
			    (
			        accommodationinfo.room_type = accommodationtype.ID
			    )
			WHERE
			    accommodationinfo.ID = ?");
	  $stmt->bind_param("i", $id);  //replacing the ? in the query, first param are the type (s for string)
		$stmt->execute(); //executing the query

	  $result = $stmt->get_result(); //getting results
		if ($result->num_rows === 0) //no results means not registered
	    exit("Room not found"); //exit the script and sends a message

	  $row= $result->fetch_assoc();
	  return $row;
	}
?>
