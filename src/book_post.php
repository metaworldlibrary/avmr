<?php
	require "db_library.php"; //PHP file where the database proccessing is actually done

	/*$_POST["room_checkindate"] and $_POST["room_checkoutdate"] were retrived from
	the POST request made in book_post.js. "select_room(datein, dateout, pax)" is a
	function from db_library, it returns an array with the available rooms or 0 if there is any.*/

	$sqldatein=date('Ymd',strtotime($_POST["room_checkindate"]));
	$sqldateout=date('Ymd',strtotime($_POST["room_checkoutdate"]));

	$results = select_room($sqldatein, $sqldateout, $_POST["room_pax"]);
	if (count ($results)>0){
		//return $results;
		foreach ( $results as $var ) {
			echo "$var[0] $var[1] $var[2] $var[2] $var[3] $var[4] $var[5] $var[6]\n";
		}
	}
	//if no available rooms.
	else{
		echo 0;
	}
	//closing database connection
	$mysqli -> close();
?>
