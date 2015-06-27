$(document).ready(function(){
  //Mobile Nav Show/Hide Function
  $portfolioNav = $('.portfolio-background-img nav');
  $('.nav-icon').click(function(){
    $('nav').toggleClass('expand');
  });

  $('.lightbox-trigger').click(function(e) {
    e.preventDefault ();
    var image_href = $(this).attr('href');

    //Checks to see if the lightbox div exists
    if ($('#lightbox').length > 0) {
      //insert img tag with the clicked link's href as a src value
      $('#lightbox-content').html('<img src="' + image_href + '"/>');
      //show lightbox window -- add transition here
      $('#lightbox').show();
    } else { //lightbox does not exist
      //Create HTML markup for lightbox window
      var lightbox =
      '<div id="lightbox">' +
        '<p>Click to close</p>' +
        '<div id="lightbox-content">' + //insert clicked link's href into img src
          '<img src="' + image_href +'" />' +
        '</div>' +
      '</div>';

      //insert lightbox HTML into page
      $('body').append(lightbox);
    }
    $("#lightbox").click(function() { //must use live, as the lightbox element is inserted into the DOM
      console.log('clicked');
      $('#lightbox').hide();
    });
  });
  //Click anywhere on the page to get rid of lightbox window
});
