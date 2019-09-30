$(document).ready(function(){

  // All our jQuery goodness is here
  // See http://www.learningjquery.com/2006/09/introducing-document-ready

  const debug = false; //true;

  if (document.title == "Frederic Perez | Website") {
    $("#nav li:first").addClass("active");
  } else if (document.title == "Frederic Perez | Networks") {
    $("#nav li:first").addClass("active");
  } else if (document.title == "Frederic Perez | About") {
    $("#nav li:nth-child(2)").addClass("active");
  } else if (document.title == "Frederic Perez | Contact") {
    $("#nav li:last").addClass("active");
  }

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

    //return false; // Seems to quit this .ready function
  });

  if (debug)
    alert("I'm at the line right before $(current).show");
  $(current).show(); // Seems to be executed only when loading the main page

});