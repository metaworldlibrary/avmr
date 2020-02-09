<?php
//connection string credentials
$servername = "localhost";
$username = "avmr";
$password = "xZMALC9baTIsSzFs";
$dbname = "avmr_db";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
  $mysqli = new mysqli("$servername", "$username", "$password", "$dbname");
  $mysqli->set_charset("utf8mb4");
}
catch(Exception $e) {
  error_log($e->getMessage());
  exit("Database connection issues");
}

//Login function
function userlogin($login, $password) {
	//Getting the connection from above
	global $mysqli;
	//preparing the query and executing the query, first line is the template and the ? will be replaced
	$stmt = $mysqli->prepare ("SELECT ID, name_first, name_last, password FROM guestinfo WHERE email= ?  OR username= ?");
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

function create_user($name, $lastname, $email, $username, $password, $mobile, $landline) {
	//Getting the connection from above
	global $mysqli;
	//preparing the query and executing the query, first line is the template and the ? will be replaced
	$stmt = $mysqli->prepare ("INSERT INTO guestinfo (name_first, name_last, email, username, password, no_mobile, no_landline) VALUES (?,?,?,?,?,?,?)");
  $stmt->bind_param("sssssss", $name, $lastname, $email, $username, $password, $mobile, $landline);  //replacing the ? in the query, first param are the type (s for string)
	$stmt->execute(); //executing the query
  return 1;
}

function create_reservation($guest_id, $room_id, $datein, $dateout) {
	//Getting the connection from above
	global $mysqli;
	//preparing the query and executing the query, first line is the template and the ? will be replaced
	$stmt = $mysqli->prepare ("INSERT INTO reservationqueue (guest_id, room_id, date_in, date_out) VALUES (?,?,?,?)");
  $stmt->bind_param("iiss", $guest_id, $room_id, $datein, $dateout);  //replacing the ? in the query, first param are the type (s for string)
	$stmt->execute(); //executing the query
  return 1;
}

function find_room_by_id($id) {
	//Getting the connection from above
	global $mysqli;
	//preparing the query and executing the query, first line is the template and the ? will be replaced
	$stmt = $mysqli->prepare ("SELECT room_name, room_accommodation_num, price, room_desc, room_num FROM accommodationinfo WHERE ID = ?");
  $stmt->bind_param("i", $id);  //replacing the ? in the query, first param are the type (s for string)
	$stmt->execute(); //executing the query

  $result = $stmt->get_result(); //getting results
	if ($result->num_rows === 0) //no results means not registered
    exit("noroom"); //exit the script and sends a message

  $row= $result->fetch_assoc();
  return $row;
}

function find_user_by_id($id) {
	//Getting the connection from above
	global $mysqli;
	//preparing the query and executing the query, first line is the template and the ? will be replaced
	$stmt = $mysqli->prepare ("SELECT * FROM guestinfo WHERE ID= ?");
  $stmt->bind_param("i", $id);  //replacing the ? in the query, first param are the type (s for string)
	$stmt->execute(); //executing the query

  $result = $stmt->get_result(); //getting results
	if ($result->num_rows === 0) //no results means not registered
    exit("noroom"); //exit the script and sends a message

  $row= $result->fetch_assoc();
  return $row;
}
?>
