 <?php
//connection string credentials
$servername = "localhost";
$username = "avmr";
$password = "xZMALC9baTIsSzFs";
$dbname = "avmr_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection to the database failed");
}

//Login function
function userlogin($login, $password) {
	//Getting the conn variable from above.
	global $conn; 
	//search if the username OR the email exist in the database
	$sql = "SELECT * FROM guestinfo WHERE email='" . $login . "' OR username = '" . $login . "'";
	
	//execute the query	
	$result = $conn->query($sql);
	//checks if there was results
	if ($result->num_rows > 0) {
		//converts result into an array
		$row = $result->fetch_array();
		//compares the passwords
		if ($row[5] == $password) {
			$_SESSION["name"] = $row[1]; //creates SESSION variable with the name in it.
			$_SESSION["last_name"] = $row[2]; //creates SESSION variable with the last name in it.
			return 1; //Since the user was found and the password matched, returns 1
		}
		else {
			return 0; //Password didn't match, returns 0.
		}
	}
	else {
		return 0; //Email or Username wasn't found, returns 0.
	}
}

function select_room($checkindate, $checkoutdate, $pax) {
	//Getting the conn variable from above.
	global $conn; 
	//search the room with the given ID
	$booked_rooms = date_range_compare($checkindate, $checkoutdate);;
	$booked_rooms_id = $booked_rooms->fetch_all();
	$ids="";
	for ($x=0; $x<count($booked_rooms_id);$x++){
		$booked_rooms_id[$x][0];
		$ids.= $booked_rooms_id[$x][0]. ",";
	}
	$ids=rtrim($ids, ",");
	//echo $ids;
	
	if(count($booked_rooms_id) > 0){
		
		//= implode(", ", $booked_rooms);
		$sql = "SELECT * FROM `accommodationinfo` WHERE NOT `ID` IN (" . $ids . ") AND `room_num` >= " . $pax;
		//$sql = "SELECT * FROM `accommodationinfo` WHERE NOT `ID` IN (10, 11, 12) AND `room_num` >= 5";
		$result = $conn->query($sql);
		$a_rooms = $result->fetch_all();
		if (count($a_rooms) > 0) {
			//$row = $result->fetch_array();//converts result into an array
			return $a_rooms;//returns the array
		}
		else {
			return 0; //room not found
		}
	}
	else 
		return 0; //not an array
}

function date_range_compare ($period_start, $period_end){
	global $conn; 
	//echo "$period_end $period_start";
	//search the room with the given ID
	$sql = "SELECT room_id FROM reservationqueue WHERE NOT date_in > $period_end OR date_out < $period_start";
	//$sql = "SELECT `room_id` FROM `reservationqueue` WHERE NOT `date_in` >  20200229 OR `date_out` < 20200201";
	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
		//returns the resultset object (not an array)
		return $result;
	}
	else {
		return 0; //room not found
	}
}
?> 