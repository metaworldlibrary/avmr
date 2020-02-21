<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php"; //PHP file where the database proccessing is actually done

	/*$_POST["room_checkindate"] and $_POST["room_checkoutdate"] were retrived from
	the POST request made in book_post.js. "select_room(datein, dateout, pax)" is a
	function from db_connection, it returns an array with the available rooms or 0 if there is any.*/

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
			$booked_rooms[$x][0];
			$ids.= $booked_rooms[$x][0]. ",";
		}
		$ids=rtrim($ids, ",");

		if(count($booked_rooms) > 0){
	    $stmt = "SELECT * FROM accommodationinfo WHERE NOT ID IN ($ids) AND room_num >= $pax";
			//$stmt = "SELECT * FROM `accommodationinfo` WHERE NOT `ID` IN (10, 11, 12) AND `room_num` >= 5";
			$result = $mysqli->query($stmt);
			$a_rooms = $result->fetch_all(MYSQLI_ASSOC);
			if (count($a_rooms) > 0) {
				return $a_rooms;//returns the array
			}
			else {
				return 0; //room not found
			}
		}
		else
			return 0; //
	}

	function date_range_compare ($period_start, $period_end){
		global $mysqli;
		//search the room with the given date range
		$stmt = "SELECT room_id FROM reservationqueue WHERE NOT date_in > $period_end OR date_out < $period_start";
		//$stmt = "SELECT `room_id` FROM `reservationqueue` WHERE NOT `date_in` >  20200229 OR `date_out` < 20200201";
		$result = $mysqli->query($stmt);

	  //if there were results in the
	  if ($result->num_rows>0) {
	    // code...
	  }
	  //fetching all the array
	  $booked_rooms = $result->fetch_all();
		if (count($booked_rooms)>0) {
			//returns the resultset object (not an array)
			return $booked_rooms;
		}
		else {
			return 0; //rooms not found
		}
	}
?>
