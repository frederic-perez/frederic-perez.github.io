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
      if (current == "index-develop-networks.html")
        alert("current is index-develop-networks.html");
      else if (current == "index-develop-about.html")
        alert("current is index-develop-about.html");
      else if (current == "index-develop-contact.html")
        alert("current is index-develop-contact.html");
      else
        alert("ERROR: current was not caught: current=`" + current + "`");
    }

    if (current == "index-develop.html#networks") {
      document.title = "Lorem Ipsum | Networks";
    } else if (current == "index-develop.html#about") {
      document.title = "Lorem Ipsum | About";
    } else if (current == "index-develop.html#contact") {
      document.title = "Lorem Ipsum | Contact";
    }

    //return false; // Seems to quit this .ready function
  });

  if (debug)
    alert("I'm at the line right before $(current).show");
  $(current).show(); // Seems to be executed only when loading the main page

});