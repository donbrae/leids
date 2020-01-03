jQuery(document).ready(function($) {

  $('.play').click(function(e) {

    // Unique variables for click event
    var $button = $(this),
      audio;

    $button.prop('disabled', true);
    audio = document.getElementById($button.data('file'));

    $(audio).bind('ended', function() {
      $(this).unbind('ended');
      $button.prop('disabled', false);
    });
    audio.play();
  });
});
