$(document).ready(function () {
//stop the auto slides
 	$("#myCarousel").carousel({interval: false});

//Responsive functions, hidding menus on click for small screens
	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('#navbarNav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	//var d = new Date();
	//var month = d.getMonth()+1;
	//var day = d.getDate();

	//var output = d.getFullYear() + '/' +
    //((''+month).length<2 ? '0' : '') + month + '/' +
    //((''+day).length<2 ? '0' : '') + day;


	//$('#room_checkindate').val("02-01-2020");
	$('#room_pax').val(5);
});
