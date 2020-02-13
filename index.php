<?php
if(session_id() == ''){
    session_start();
}
//var_dump($_SESSION);
?>
<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Amazing view Mountain and Farm Resort</title>

	<!-- Icons-->
	<link rel="icon" href="img/logo2.png">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
	<!-- Custom CSS-->
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/style1.css">
</head>

<body class="site">
	<!-- Navbar -->
	<nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-between">
		<a class="navbar-brand" href="#" data-target="#main-content" data-slide-to="0"><img src="img/logo2.png" width="30" height="30" class="d-inline-block align-top mr-2" alt=""></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav mx-2">
				<li class="nav-item active"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="0"><b>Home</b><span class="sr-only">(current)</span></a></li>
				<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="1">Pricing</a></li>
				<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="3">Gallery</a></li>
				<li class="nav-item"><a class="nav-link" href="#" data-target="#main-content" data-slide-to="4">Contact us!</a></li>
			</ul>
			<a class="btn btn-success m-2" href="#" data-target="#main-content" data-slide-to="1">Book now!</a>
		</div>

		<div class="collapse navbar-collapse justify-content-end text-white" id="navbarNav">
			<b><a id="navbar-sign-in-label">Already got a reservation? sign in to check:</a></b>
			<a class="btn btn-primary m-2" href="#" id="navbar-sign-in" data-target="#main-content" data-slide-to="6">Sign in</a>
			<a class="btn btn-success m-2" id="navbar-dashboard" href="#" data-target="#main-content" data-slide-to="6">Dashboard</a>
			<a class="btn btn-outline-primary m-2" id="navbar-sign-out">Sign out</a>
		</div>
	</nav>
	<!--/Navbar-->

	<!--Content-->
	<div class="site-content container-fluid d-flex align-item-center justify-content-center">
		<!--Carousel effect-->
		<div id="main-content" class="container-fluid carousel slide carousel-fade  h-100" data-ride="carousel">
			<!-- The slideshow -->
			<div class="container-fluid h-100 carousel-inner text-white">

				<!--Home Section Carousel ITEM 0-->
				<div class="container-fluid carousel-item active h-100">
					<section id="home" class="container-fluid column-center">
						<div class="h1 font-weight-bold title">AMAZING VIEW MOUNTAIN AND FARM RESORT</div>
						<p class="h5 font-weight-normal">Nestled in a high point overlooking Mabitac Valley and Sierra Madre mountain, it is the perfect backdrop for your unforgibable relaxing holidays!</p><hr>
						<p class=""><a href="#" class="btn btn-lg btn-secondary">Learn more</a></p>
					</section>
				</div>
				<!--/Home Section Carousel ITEM 0-->

				<!--book section room Section Carousel ITEM 1-->
				<div class="container-fluid carousel-item row-center">
					<section id="book-section" class= "container-fluid w-75 row-center">
						<div class="container-fluid	row row-center">
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
									<div>
										<label >Number of Guest</label>
										<input type="number" class="form-control" id="room_pax">
									</div>
									<a class="btn btn-primary m-2" id="room_search">Search</a>
								</form>
							</div>
							<!--cards-->
							<div id="rooms-container" class="d-inline-block container-fluid col-md-8 bg-light border border-secondary rounded-lg column-center"></div>
							<!--cards-->
						</div>
					</section>
				</div>
				<!--/book section Carousel ITEM 1-->

				<!--Activities Section Carousel ITEM 2-->
				<div class="carousel-item">
					<section id="activities">
						<p class="h1 text-center">Activities</p>
					</section>
				</div>
				<!--/Activities Section Carousel ITEM 2-->

				<!--About Section Carousel ITEM 3-->
				<div class="carousel-item">
					<section id="about">
						<p class="h1 text-center">Gallery</p>
						<div style="display:flex;padding-left:10%;padding-right:10%" id="colorstrip"/>
        			<div style="width:40%;color:red;padding:10px;">
        				<div >
        				<span>La Terraza</span><br><br>
        				<span style = "text-align: justify; text-justify: inter-word;">Be astonished by the picture perfect scenery at the La Terraza, overlooking Mabitac Valley and Sierra Madre Mountains. Be amazed at the calming effect of sunrise and the serene dawning of sunset.</span>
        				</div>
        			</div>

        			<div style = "position: relative; height: 100%; width: 60%; padding-left: 50px;">
        				<meta name="viewport" content="width=device-width, initial-scale=1">
        				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

        				<div class="w3-content w3-display-container" style="max-width: 600px;">
        				  <img class="mySlides1" src="images\la terraza\laterraza.jpg" style="width:100%">
        				  <img class="mySlides1" src="images\la terraza\living.jpg" style="width:100%">
        				  <img class="mySlides1" src="images\la terraza\6pax.jpg" style="width:100%">
        				  <img class="mySlides1" src="images\la terraza\4pax.jpg" style="width:100%">

        				  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1,0)">&#10094;</button>
        				  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1,0)">&#10095;</button>
        				</div>
        			</div>

              <div style="display:flex;padding-left:10%;padding-right:10%" id="colorstrip">
          			<div style = "position: relative; height: 100%; width: 60%; padding-right: 50px;">
          				<div class="w3-content w3-display-container" style="max-width: 600px;">
          				  <img class="mySlides2" src="image1.jpg" style="width:100%" id="start">
          				  <img class="mySlides2" src="image2.jpg" style="width:100%">
          				  <img class="mySlides2" src="image3.jpg" style="width:100%">
          				  <img class="mySlides2" src="1.jpg" style="width:100%">

          				  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1,1)">&#10094;</button>
          				  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1,1)">&#10095;</button>
          				</div>
          			</div>
          			<div style="width:40%;color:red;padding:10px;">
          				<span>Pavilion Villa</span><br><br>
          				<span style = "text-align: justify; text-justify: inter-word;">Experience the amazing view given by the Pavilion Dorm overlooking the whole resort, Mabitac Valley and Sierra Madre Mountains. Be soothed by the cold breeze in the morning and the beautiful sunset in the afternoon.</span>
          			</div>
          		</div>

          </section>
		    </div>



				<!--/About Section Carousel ITEM 3-->

				<!--/Contact Section Carousel ITEM 4-->
				<div class="carousel-item container-fluid row-center">
					<section id="contact" class="container-fluid w-75 row-center">
						<p class="h1 text-center">Contact us</p>

						<div class="container text-center text-white py-3">
							<p>Amazing View Mountain and Farm Resort, KM 72 Sitio Little Baguio Brgy. Paagahan, Mabitac Laguna, Philippines</p>
							<div class="row">
								<div class="col-sm"><i class="material-icons">local_phone</i></div>
								<div class="col-sm"><i class="material-icons">phone_android</i></div>
								<div class="col-sm"><i class="material-icons">mail_outline</i></div>
							</div>

							<div class="row">
								<div class="col-sm"><a class="mx-2">+63(049) 0591 0711</a></div>
								<div class="col-sm"><a class="mx-2">+639464073550</a></div>
								<div class="col-sm"><a class="mx-2">reservation@amazingviewresort.com</a></div>
							</div>

							<div class="row">
								<div class="col-sm"><a class="mx-2">5910698</a></div>
								<div class="col-sm"><a class="mx-2">+639174545980</a></div>
							</div>
						</div>
					</section>
				</div>
				<!--/Contact Section Carousel ITEM 4-->

				<!--/Sign up Section Carousel ITEM 5-->
				<div class="carousel-item container-fluid row-center">
					<section id="contact-info" class="container-fluid w-75 row-center">
						<div class="container-fluid row h-100 w-100 row-center">
							<div class="col-md-5 container-fluid h-100">
								<form class="form-horizontal">
									<label class="h2 my-3 font-weight-bold title">GUEST DETAILS</label>
									<div class="form-inline">
										<input type="text" class="form-control w-50" id="signup-lastname" placeholder="Last Name">
										<input type="text" class="form-control w-50" id="signup-firstname" placeholder="First Name">
									</div>
									<div class="form-horizontal">
										<label class="mt-3 h6 font-weight-bold">Email</label>
										<input type="email" class="form-control" id="signup-email">
									</div>
									<div class="form-group">
										<label class="mt-3 mt-2 h6 font-weight-bold">Mobile No.</label>
										<input type="text" class="form-control" id="signup-NoMobile" placeholder="(+63)XXX-XXX-XXXX">
									</div>
									<div class="form-group">
										<label class="mt-3 mt-2 h6 font-weight-bold">Landline No.</label>
										<input type="text" class="form-control" id="signup-NoLandline" placeholder="X-XXX-XXXX">
									</div>
									<div class="form-group">
										<label class="mt-3 mt-2 h6 font-weight-bold">Username</label>
										<input type="text" class="form-control" id="signup-username" placeholder="">
									</div>
									<div class="form-group">
										<label class="mt-3 mt-2 h6 font-weight-bold">Password</label>
										<input type="password" class="form-control" id="signup-password" placeholder="">
									</div>
									<div class="form-group">
										<label class="mt-3 mt-2 h6 font-weight-bold">Re-Enter Password</label>
										<input type="password" class="form-control" id="signup-repassword" placeholder="">
									</div>
									<button type="submit" class="btn btn-primary mb-3" id="signup-create">Submit</button>
								</form>
							</div>
							<div class="col-md-2 container-fluid w-100 column-center"><a class="h1 font-weight-bold">OR</a></div>
							<!--Login-->
							<div class="col-md-5 container-fluid w-100 column-center">
								<form class="form-signin column-center" id="login-form2">
									<div><label class="h3 text-center font-weight-bold title" id="login-contact-label">ALREADY HAVE AN ACCOUNT?</label></div>
									<h1 class="mb-3 h6 font-weight-bold" id="login-contact-label2">Please sign in</h1>
									<label for="login_username" class="sr-only">Email address</label>
									<input type="text" id="login_username2" class="form-control" placeholder="Email address or Username" required autofocus>
									<label for="login_password" class="sr-only">Password</label>
									<input type="password" id="login_password2" class="form-control" placeholder="Password" required>

									<div class="checkbox mb-3">
										<label>
											<input type="checkbox" value="remember-me"> Remember me
										</label>
									</div>
									<button class="btn btn-lg btn-primary btn-block" type="submit" id="form_send2">Next</button>
									<button class="btn btn-lg btn-secondary btn-block" type="submit" id="sign-out2">This is not me</button>
								</form>
							</div>
							<!--/Login-->
						</div>
					</section>
				</div>
				<!--/Sign up Section Carousel ITEM 5-->

				<!--Login Section Carousel ITEM 6-->
				<div class="carousel-item container-fluid column-center">
					<section id="login" class="container-fluid w-75 column-center">
						<!--Sign in form-->
						<form class="form-signin column-center" id="login-form">
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
							<button class="btn btn-lg btn-primary btn-block" type="button" id="form_send">Sign in</button>
						</form>
						<!--/Sign in form-->

						<!--Members area-->
						<div id="member-area">
							<h1 class="h1 mb-3 font-weight-bold title">DASHBOARD</h1>
						</div>
						<!--/Members area-->
					</section>
				</div>
				<!--/Login Section Carousel ITEM 6-->

				<!--book confirmation Section Carousel ITEM 7-->
				<div class="carousel-item container-fluid column-center">
					<section id="confirmation" class="container-fluid w-75 column-center">
						<form class="form-horizontal column-center ">
							<label class="h1 mb-3 font-weight-bold title">CONFIRM RESERVATION</label>
							<div class="form-inline text-left">
								<label class="mx-1 h6 font-weight-bold">Name.</label>
								<input type="text" class="form-control-plaintext w-50 text-white" id="confirm-firstname" disabled="true">
							</div>
							<div class="form-inline text-left">
								<label class="mx-1 h6 font-weight-bold">Last name.</label>
								<input type="text" class="form-control-plaintext w-50 text-white" id="confirm-lastname" disabled="true">
							</div>
							<div class="form-inline text-left">
								<label class="mx-1 h6 font-weight-bold">Username.</label>
								<input type="text" class="form-control-plaintext w-50 text-white" id="confirm-username" disabled="true">
							</div>
							<div class="form-inline text-left">
								<label class="mx-1 h6 font-weight-bold">E-Mail.</label>
								<input type="text" class="form-control-plaintext w-50 text-white" id="confirm-email" disabled="true">
							</div>
							<div class="form-inline text-left">
								<label class="mx-1 h6 font-weight-bold">Mobile No.</label>
								<input type="text" class="form-control-plaintext w-50 text-white" id="confirm-NoMobile" disabled="true">
							</div>
							<div class="form-inline text-left">
								<label class="mx-1 h6 font-weight-bold">Landline No.</label>
								<input type="text" class="form-control-plaintext w-50 text-white" id="confirm-NoLandline" disabled="true">
							</div>

							<div class="card bg-secondary border-dark my-2 w-50">
								<div class="row no-gutters">
									<div class="col-md-5 fill"><img src="img/room1.jpg" class="card-img"></div>
									<div class="col-md-7">
										<div class="card-body">
											<h4 class="card-title" id="confirm-card-title"></h4>
											<p class="card-text text-justify" id="confirm-card-description"></p>
										</div>
										<div class="card-footer container-fluid text-center">
											<div class="container-fluid">
												<div class="container-fluid row row-cols-3 no-gutters row-center">
													<div class="col text-center no-gutters row-center"><i class="material-icons">attach_money</i><a id="confirm-card-price"></a></div>
													<div class="col text-center no-gutters row-center"><i class="material-icons mr-2">people</i><a id="confirm-card-numpeople"></a></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class"container row-center">
								<button type="button" class="mx-2 btn btn-danger" href="#" data-target="#main-content" data-slide-to="1" id="cancel-create">Cancel</button>
								<button type="submit" class="mx-2 btn btn-success" href="#" data-target="#main-content" data-slide-to="7" id="confirm-create">Book room</button>
							</div>
						</form>
					</section>
				</div>
				<!--/book confirmation Section Carousel ITEM 7-->

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
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<!-- Custom JS/JQuery Script
-->
  <script src="js/main1.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
