$(document).ready(function () {
//stop the auto slides
	$('.carousel').carousel('pause');

//Responsive functions, hidding menus on click for small screens
	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('#navbarNav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
});
