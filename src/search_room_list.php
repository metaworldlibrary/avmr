<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	$sqldatein=date('Ymd',strtotime($_POST["room_checkindate"]));
	$sqldateout=date('Ymd',strtotime($_POST["room_checkoutdate"]));

	$results = select_room($sqldatein, $sqldateout, $_POST["room_pax"]);
	if (count ($results)>0){
		echo json_encode($results, JSON_FORCE_OBJECT); //converts the result from array to JSON
	}
	else{
		echo 0;
	}
	$mysqli -> close();//closing database connection

	//
	function select_room($checkindate, $checkoutdate, $pax) {
		//Getting the conn variable from above.
		global $mysqli;
		//search the room with the given ID
		$booked_rooms = date_range_compare($checkindate, $checkoutdate);
		$ids="";
		for ($x=0; $x<count($booked_rooms);$x++){
			$ids.= $booked_rooms[$x]["room_id"]. ",";
		}
		$ids=rtrim($ids, ",");
		
		$stmt = $mysqli->prepare (
			"SELECT accommodationtype.id,
			       accommodationtype.room_name,
			       Count(accommodationtype.id) AS number_of_rooms,
			       accommodationtype.room_type_desc,
			       accommodationtype.card_picture
			FROM   accommodationinfo
			       INNER JOIN accommodationtype
			               ON( accommodationinfo.room_type = accommodationtype.id )
			WHERE  ( accommodationinfo.room_num >= ? )
			       AND ( NOT accommodationinfo.id IN(?))
			       AND ( accommodationinfo.status = 0 )
			GROUP  BY accommodationtype.id
			ORDER  BY accommodationtype.id");

		$stmt->bind_param("is", $pax, $ids);
		$stmt->execute();

		$result = $stmt->get_result();
		if ($result->num_rows === 0) //no results means not registered
	     exit("No results"); //exit the script and sends a message

		$row= $result->fetch_all(MYSQLI_ASSOC);
		return $row;
	}

	function date_range_compare ($period_start, $period_end){
		global $mysqli;
		//search the room with the given date range
		$stmt = $mysqli->prepare (
      "SELECT room_id
		    FROM reservationqueue
		    WHERE NOT date_in > ?
			  OR date_out < ?");
    $stmt->bind_param("ss", $period_end, $period_start);
    $stmt->execute();
		//$stmt = "SELECT `room_id` FROM `reservationqueue` WHERE NOT `date_in` >  20200229 OR `date_out` < 20200201";
		$result = $stmt->get_result();

	  if ($result->num_rows === 0)
      exit("Dates");

    $row= $result->fetch_all(MYSQLI_ASSOC);
    return $row;
	}
?>
