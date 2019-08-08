$(document).ready(function(){

  // All our jQuery goodness is here
  // See http://www.learningjquery.com/2006/09/introducing-document-ready

  const debug = false; //true;

  $("#content h3").hide();
  $("#content div").hide();

  $("#content div:first").show();
  $("#nav li:first").addClass("active");

  $('#nav li a').click(function(){
    $('#nav li').removeClass("active");
    $(this).parent().addClass("active");

    const current = $(this).attr("href");
    if (debug && false) {
      if (current == "index-develop.html#networks")
        alert("current is index-develop.html#networks");
      else if (current == "index-develop.html#about")
        alert("current is index-develop.html#about");
      else if (current == "index-develop.html#contact")
        alert("current is index-develop.html#contact");
      else
        alert("ERROR: current was not caught");
    }

    const textElementNetwo = document.getElementById("networks");
    const textElementAbout = document.getElementById("about");
    const textElementConta = document.getElementById("contact");

    //alert("Heights: Netwo:" + $(textElementNetwo).height() + " About:" + $(textElementAbout).height() + " Conta:" + $(textElementConta).height());

    let textElementToAnimate;
    if (current == "index-develop.html#networks") {
      textElementToAnimate = textElementNetwo;
      $(textElementAbout).fadeOut("fast");
      $(textElementConta).fadeOut("fast");
      document.title = "Lorem Ipsum | Networks";
    } else if (current == "index-develop.html#about") {
      textElementToAnimate = textElementAbout;
      //alert("We are about to fade out `Network`");
      $(textElementNetwo).fadeOut("fast");
      //alert("We are about to fade out `Conta`");
      $(textElementConta).fadeOut("fast");
      //alert("We are about to change the document title");
      document.title = "Lorem Ipsum | About";
    } else if (current == "index-develop.html#contact") {
      textElementToAnimate = textElementConta;
      $(textElementNetwo).fadeOut("fast");
      $(textElementAbout).fadeOut("fast");
      document.title = "Lorem Ipsum | Contact";
    }

    $("#content").animate({"height":$(textElementToAnimate).height()},function(){
      //alert(">>> We are about to fade in `current` | height is " + $(textElementToAnimate).height() + " px");
      $(current).fadeIn("fast");
    });

    //alert("We are about to fade in `textElementToAnimate`");
    $(textElementToAnimate).fadeIn();

    return false; // Seems to quit this .ready function
  });

  if (debug)
    alert("I'm at the line right before $(current).show");
  $(current).show(); // Seems to be executed only when loading the main page

});