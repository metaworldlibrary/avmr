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
				<a class="btn btn-success m-2" href="#" data-target="#main-content" data-slide-to="1">Book now!</a>
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
		<div class="site-content d-flex align-item-center justify-content-center">
			<!--Carousel effect-->
			<div id="main-content" class="container carousel slide" data-ride="carousel">
				<!-- The slideshow -->
				<div class="carousel-inner text-white">
					<!--Home Section-->
					<div class="carousel-item active">
						<section id="home" class="">
							<div class="h1 font-weight-bold title">AMAZING VIEW</div>
							<div class="h6 font-weight-bold">MOUNTAIN RESORT</div><hr>
							<p class="h5 font-weight-normal">Nestled in a high point overlooking Mabitac Valley and Sierra Madre mountain, it is the perfect backdrop for your unforgibable relaxing holidays!</p><hr>
							<p class=""><a href="#" class="btn btn-lg btn-secondary">Learn more</a>
							</p>
						</section>
					</div>
					<!--/Home Section-->

					<!--Pricing Section-->
					<div class="carousel-item">
						<section id="pricing" class= "text-center">
							<div class="row">
								<div class="col-md-3">
									<form class="form-horizontal">
										<div class="form-group">
											<label >Check-In Date</label>
											<input type="date" class="form-control" id="room_checkindate">
										</div>
										<div class="form-group">
											<label >Check-Out Date</label>
											<input type="date" class="form-control" id="room_checkoutdate">
										</div>
										<div class="form-group">
											<label >Number of Guest</label>
											<input type="number" class="form-control" id="room_pax">
										</div>
										<button type="submit" class="btn btn-primary" id ="room_search">Search</button>
									</form>
								</div>
								<div class="col-md-8">
									<!--cards-->
									<div class="card-group">
									  <div class="card border-secondary mb-3">
									    <img src="img/room1.jpg" class="card-img-top" alt="...">
									    <div class="card-body">
									      <h5 class="card-title">Terraza</h5>
									      <p class="card-text">Beautiful place</p>
									      <p class="card-text"><small class="text-muted">$6000</small></p>
									    </div>
									  </div>
									  <div class="card">
									    <img src="img/room1.jpg" class="card-img-top" alt="...">
											<div class="card-body">
									      <h5 class="card-title">Terraza</h5>
									      <p class="card-text">Beautiful place</p>
									      <p class="card-text"><small class="text-muted">$6000</small></p>
									    </div>
									  </div>
									  <div class="card">
									    <img src="img/room1.jpg" class="card-img-top" alt="...">
											<div class="card-body">
									      <h5 class="card-title">Terraza</h5>
									      <p class="card-text">Beautiful place</p>
									      <p class="card-text"><small class="text-muted">$6000</small></p>
									    </div>
									  </div>
										<div class="card">
										 <img src="img/room1.jpg" class="card-img-top" alt="...">
										 <div class="card-body">
											 <h5 class="card-title">Terraza</h5>
											 <p class="card-text">Beautiful place</p>
											 <p class="card-text"><small class="text-muted">$6000</small></p>
										 </div>
									 </div>
									</div>
								<!--cards-->
							</div>
						</section>
					</div>
					<!--/Pricing Section-->

					<!--Activities Section-->
					<div class="carousel-item">
						<section id="activities">
							<p class="h1 text-center">Activities</p>
						</section>
					</div>
					<!--/Activities Section-->

					<!--About Section-->
					<div class="carousel-item">
						<section id="about">
							<p class="h1 text-center">About</p>
						</section>
					</div>
					<!--/Contact Section-->

					<!--/Contact Section-->
					<div class="carousel-item">
						<section id="contact">
							<p class="h1 text-center">Contact us</p>

							<div class="container text-center text-white py-3">
								<p>Amazing View Mountain and Farm Resort, KM 72 Sitio Little Baguio Brgy. Paagahan, Mabitac Laguna, Philippines</p>
								<div class="row">
									<div class="col-sm">
										<i class="material-icons">local_phone</i>
									</div>
									<div class="col-sm">
										<i class="material-icons">phone_android</i>
										</div>
									<div class="col-sm">
										<i class="material-icons">mail_outline</i>
									</div>
								</div>

								<div class="row">
									<div class="col-sm">
										<a class="mx-2">+63(049) 0591 0711</a>
									</div>
									<div class="col-sm">
										<a class="mx-2">+639464073550</a>
										</div>
									<div class="col-sm">
										<a class="mx-2">reservation@amazingviewresort.com</a>
									</div>
								</div>

								<div class="row">
									<div class="col-sm">
										<a class="mx-2">5910698</a>
									</div>
									<div class="col-sm">
										<a class="mx-2">+639174545980</a>
										</div>
								</div>
							</div>
						</section>
					</div>
					<!--/Contact Section-->

					<!--Login Section-->
					<div class="carousel-item">
						<section id="login" class="text-center">
							<!--Sign in form-->
							<form class="form-signin" id="login-form">
								<img class="mb-4" src="img/logo2.png" alt="" width="200" height="144">
								<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
								<label for="login_username" class="sr-only">Email address</label>
								<input type="text" id="login_username" class="form-control" placeholder="Email address or Username" required autofocus>
								<label for="login_password" class="sr-only">Password</label>
								<input type="password" id="login_password" class="form-control" placeholder="Password" required>

								<div class="checkbox mb-3">
									<label>
									  <input type="checkbox" value="remember-me"> Remember me
									</label>
								</div>
								<button class="btn btn-lg btn-primary btn-block" type="submit" id="form_send">Sign in</button>
							</form>
							<!--/Sign in form-->

							<!--Members area-->
							<div id="member-area">
								<h1 class="h1 mb-3 font-weight-bold title">DASHBOARD</h1>
							</div>
							<!--/Members area-->
						</section>
					</div>
					<!--/Login Section-->
				</div>
				<!--/The slideshow-->
			</div>
			<!--/Carousel effect-->
		</div>
		<!--Content-->

		<!--Footer-->
		<div class="container-fluid bg-dark sticky-bottom">
			<div class="container text-center text-white py-1">
				<b>&copy2020 Amazing View, Mountain and Farm Resort.</b>
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
		<script src="js/book_post.js"></script>
		<script src="js/main.js"></script>
    </body>
</html>
