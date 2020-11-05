$(document).ready(function(){
  // Hero banner animation
  var roles = ['a frontend dev', 'a designer', 'an artist', 'a creator'];
  var $heroText = $('#hero--box');
  var heroTextIndex = 1;
  var heroTimer = window.setInterval(changeHeroText, 2100);

  function changeHeroText() {
    if (heroTextIndex > 3) {
      heroTextIndex = 0;
    }

    $heroText.text(roles[heroTextIndex]);

    heroTextIndex++;
  };



  //Mobile Nav Show/Hide Function
  $('#nav-main--toggle').click(function(){
    console.log('clicked');
    $('.nav-main--list').slideToggle();
  });


  //Lightbox functionality
  $('.lightbox-trigger').click(function(e) {
    e.preventDefault ();
    // var image_href = $(this).attr('href');
    var $lightbox = $('#modal-' + $(this).attr('id'));
    var $lightboxClose = $lightbox.find('.modal--close');


    $lightbox.fadeIn();
    $lightbox.attr('open', true);
    $lightboxClose.focus();


    $lightboxClose.click(function() {
      $lightbox.fadeOut();
      $lightbox.attr('open', false);
    });




    // //Checks to see if the lightbox div exists
    // if ($('#lightbox').length > 0) {
    //   //insert img tag with the clicked link's href as a src value
    //   $('#lightbox-content').html('<img src="' + image_href + '"/>');
    //   //show lightbox window -- add transition here
    //   $('#lightbox').fadeIn();
    // } else { //lightbox does not exist
    //   //Create HTML markup for lightbox window
    //   var lightbox =
    //   '<div id="lightbox" style="display:none">' +
    //     '<p>Click to close</p>' +
    //     '<div id="lightbox-content">' + //insert clicked link's href into img src
    //       '<img src="' + image_href +'" />' +
    //     '</div>' +
    //   '</div>';

    //   //insert lightbox HTML into page
    //   $('body').append(lightbox);
    //   $('#lightbox').fadeIn();
    // }
    // $("#lightbox").click(function() { //must use live, as the lightbox element is inserted into the DOM
    //   $('#lightbox').fadeOut();
    // });
  });
  //Click anywhere on the page to get rid of lightbox window
});
