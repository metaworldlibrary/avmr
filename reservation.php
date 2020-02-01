<?php session_start();?>
<!doctype html>
<html lang="en">
	<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Amazing view</title>
		
		<!-- Icons-->
		<link rel="icon" href="img/logo2.ico">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
		<!-- Custom CSS-->
		<link rel="stylesheet" href="css/style.css">
    </head>	
    
	<body class="site">
		<!-- Navbar -->
		<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-between">
			<a class="navbar-brand" href="#" data-target="#main-content" data-slide-to="0"><img src="img/logo2.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="">Amazing View</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mx-2">
					<li class="nav-item active"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="0"><b>Home</b><span class="sr-only">(current)</span></a></li>
					<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="1">Pricing</a></li>
					<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="2">Activities</a></li>
					<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="3">About</a></li>
					<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="4">Contact us!</a></li>
				</ul>
				<a class="btn btn-success m-2" href="#">Book now!</a>
			</div>
				
			<div class="collapse navbar-collapse justify-content-end text-white" id="navbarNav">
				<b><a id="navbar-sign-in-label">Already got a reservation? sign in to check:</a></b>
				<a class="btn btn-primary m-2" href="#" id="navbar-sign-in" data-target="#main-content" data-slide-to="5">Sign in</a>
				<a class="btn btn btn-success m-2" id="navbar-dashboard" href="#" data-target="#main-content" data-slide-to="5">Dashboard</a>
				<a class="btn btn btn-outline-primary m-2" id="navbar-sign-out">Sign out</a>
			</div>
		</nav>
		<!--/Navbar-->
		
		<!--Content-->		
		<div class="container-fluid row">
            <div class="">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label>Check-In Date</label>
                        <input type="date" class="form-control" id="checkindate">
                    </div>
                    <div class="form-group">
                        <label >Check-Out Date</label>
                        <input type="date" class="form-control" id="checkoutdate">
                    </div>
                    <div class="form-group">
                        <label >Number of Guest</label>
                        <input type="number" class="form-control" id="pax">
                    </div>
                    <button type="search" class="btn btn-primary">Search</button>
                </form>
            </div>
            <div class="col">
                <div>
                    //search results here//
                </div>
                <button class="btn btn-primary">Next</button>
            </div>
        </div>
		<!--Content-->
		
		<!--Footer-->	
		<div class="container-fluid bg-dark sticky-bottom">			
			<div class="container text-center text-white py-1">	
				<b>&copy2020 Amazing View Mountain and Farm Resort.</b>
			</div>
		</div>
		<!--/Footer-->
					
		<!-- JQuery, needed for bootstrap and animations-->
		<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
		<!-- Popper, needed for bootstrap features-->
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<!-- Bootstrap core-->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">		
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
		<!-- Custom JS/JQuery Script-->
		<script src="js/login_post.js"></script>
		<script src="js/main.js"></script>
    </body>
</html>