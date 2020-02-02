<?php
require "db_library.php"; //PHP file where the database proccessing is actually done

//$_POST["login_username"] and $_POST["login_password"] were retrived from
//the POST request made in login_post.js. "userlogin(username, password)" is a
//function from db_library, it returns 1 if credentials were found and 0 if it failed.
if (userlogin($_POST["login_username"], $_POST["login_password"])===1){
	//SESSION variables were created in db_library, we are just printing them here.
	echo "{$_SESSION["name"]} {$_SESSION["last_name"]}";
}
$mysqli -> close();
?>
