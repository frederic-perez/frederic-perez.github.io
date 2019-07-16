$(document).ready(function(){

	// All our jQuery goodnes is here
	// See http://www.learningjquery.com/2006/09/introducing-document-ready

	var debug = false; //true;
	
	$("#content h3").hide();
	$("#content div").hide();

	$("#content div:first").show();
	$("#nav li:first").addClass("active");

	$('#nav li a').click(function(){
		$('#nav li').removeClass("active");
		$(this).parent().addClass("active");

		var current = $(this).attr("href");
		if (debug && false) {
			if (current == "index.html#networks")
				alert("current is index.html#networks");
			else if (current == "index.html#about")
				alert("current is index.html#about");
			else if (current == "index.html#contact")
				alert("current is index.html#contact");
			else
				alert("ERROR: current was not catched!!!");
		}
		
		var textElementNetwo = document.getElementById("networks");
		var textElementAbout = document.getElementById("about");
		var textElementConta = document.getElementById("contact");
		
		var textElementToAnimate;
		if (current == "index.html#networks") {
			textElementToAnimate = textElementNetwo;
			$(textElementAbout).fadeOut("fast");
			$(textElementConta).fadeOut("fast");
			document.title = "Frederic Perez | Networks";
		} else if (current == "index.html#about") {
			textElementToAnimate = textElementAbout;
			$(textElementNetwo).fadeOut("fast");
			$(textElementConta).fadeOut("fast");
			document.title = "Frederic Perez | About";
		} else if (current == "index.html#contact") {
			textElementToAnimate = textElementConta;
			$(textElementNetwo).fadeOut("fast");
			$(textElementAbout).fadeOut("fast");
			document.title = "Frederic Perez | Contact";
		}

		$("#content").animate({"height":$(textElementToAnimate).height()},function(){
			$(current).fadeIn("fast");
		});
		$(textElementToAnimate).fadeIn();
		
		return false; // Seems to quit this .ready function
	});

	if (debug)
		alert("I'm at the line right before $(current).show");
	$(current).show(); // Seems to be executed only when loading the main page
	
});