// console.log("main.js is loaded"); <!--write this to the console-->
// $("img").width(200);
//following function means: when the document(html doc) is ready, run this function.
//always include this function and write all your code inside
$(document).ready(function(){
	$("li").on("click", function(){
		if ($(this).hasClass("done")) {
			$(this).removeClass("done");
		}
		else {
			$(this).addClass("done");
		}
		// $(this).addClass("done");
	});

	$("img").on("dblclick", function(){
		$("img").width(200);
		$("h1").fadeOut();
		$(".booboo").slideUp();
		$("#rahul").hide();
	});

	// $("img").mouseout(function(){
	// 	$("img").width(500);
	// });

	// $("img").click(function(){
	// 	$("img").width(200);
	// });
}); //always rmb to put ;
I was here.