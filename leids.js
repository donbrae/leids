jQuery(document).ready(function($) {

  var volume = {
    sco: 0.7
  };

  $('.play').click(function(e) {

    // Unique variables for click event
    var $button = $(this),
      lang = $button.data('file').split('__')[1],
      audio;

    $button.prop('disabled', true);
    audio = document.getElementById($button.data('file'));

    if (volume[lang]) {
      audio.volume = volume[lang];
    }

    $(audio).bind('ended', function() {
      $(this).unbind('ended');
      $button.prop('disabled', false);
    });

    audio.play();
  });
});
