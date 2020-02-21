<?php
	if(session_id() == ''){
			session_start();
	}
	require "db_connection.php";

  $sqldatein=date('Ymd',strtotime($_POST["room_checkindate"]));
	$sqldateout=date('Ymd',strtotime($_POST["room_checkoutdate"]));

  $results = select_package($_POST["type_id"], $sqldatein, $sqldateout, $_POST["room_pax"]);
	if (count($results)>0){
		echo json_encode($results, JSON_FORCE_OBJECT);
	}
	else {
		echo 0;
	}
	//closing database connection
	$mysqli -> close();

  function select_package($typeid, $checkindate, $checkoutdate, $pax){
    //Getting the connection from above
    global $mysqli;

    $booked_rooms = date_range_compare($checkindate, $checkoutdate);
    $ids="";
    for ($x=0; $x<count($booked_rooms);$x++){
      $ids.= $booked_rooms[$x]["room_id"]. ",";
    }
    $ids=rtrim($ids, ",");
    $stmt = $mysqli->prepare (
      "SELECT
          accommodationinfo.room_num AS max_people,
          accommodationinfo.price
      FROM
          accommodationtype
      INNER JOIN accommodationinfo ON(
              accommodationinfo.room_type = accommodationtype.ID
          )
      WHERE
          (accommodationtype.ID = ?)
          AND (accommodationinfo.room_num>=?)
          AND ( NOT accommodationinfo.id IN( ? ) )
          AND ( accommodationinfo.status = 0 )
      GROUP BY
          accommodationtype.room_name,
          accommodationinfo.price
      ORDER BY
          accommodationinfo.price");
    $stmt->bind_param("iis", $typeid, $pax, $ids);  //replacing the ? in the query, first param are the type (s for string)
    $stmt->execute(); //executing the query

    $result = $stmt->get_result(); //getting results
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
