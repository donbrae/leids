jQuery(document).ready(function($) {
		$('.play').click(function(e) {

				var $button = $(this);
				$button.prop('disabled', true);

				var audio = document.getElementById($button.data('file'));
				// word = $button.text();
				// $button.text('Playing...');

				// if ($(audio).attr('id').indexOf('sco') > -1) { // Didna quite trim the stairt o the file eneuch
				//     audio.currentTime = 0.089;
				// }

				$(audio).bind('ended', function() {
						// $button.text(word);
						$(this).unbind('ended');
						$button.prop('disabled', false);
				});
				audio.play();
		});
});
