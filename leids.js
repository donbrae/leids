jQuery(document).ready(function($) {

  // var volume = {}; // Doesn't work in iOS

  $('.play').click(function(e) {

    // Unique variables for click event
    var $button = $(this),
      lang = $button.data('file').split('__')[1],
      audio;

    $button.prop('disabled', true);
    audio = document.getElementById($button.data('file'));

    // if (volume[lang]) {
    //   audio.volume = volume[lang];
    // }

    $(audio).bind('ended', function() {
      $(this).unbind('ended');
      $button.prop('disabled', false);
    });

    audio.play();
  });
});
