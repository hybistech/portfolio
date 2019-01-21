$(document).ready(function() {
	$(".btn").css("background-color", "red");

	$(".btn").css("color", "black");

	// $(".btn").hover(function(){

	// 	$(".logo").attr("src", "logo.jpg")
	// });

	// $(".btn").mouseout(function(){
			
	// 	$(".logo").attr("src", "logo_png.png")
	// 	});


	$(".logo").hover(function(){
		$(".logo").attr("src","logo.jpg");
	});

	$(".logo").mouseout(function(){
		$(".logo").attr("src","logo_png.png");
	});



	$(".btn").hover(function(){
		$(".lead").hide();
	});

	$(".btn").mouseout(function(){
		$(".lead").show();
	});

	$(".btn").hover(function(){
		$(".jumbotron").css("background-color","red");
	});






});