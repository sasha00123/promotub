(function($) {

	$(window).on('load', function(){
		$('.fade-in').css({ position: 'relative', opacity: 0, top: -14 });
		setTimeout(function(){
			$('#preload-content').fadeOut(400, function(){
				$('#preload').fadeOut(800);
				setTimeout(function(){
					$('.fade-in').each(function(index) {
						$(this).delay(400*index).animate({ top : 0, opacity: 1 }, 800);
					});
				}, 800);
			});
		}, 400);
	});

	$(document).ready(function() {

		// Countdown timer
		// Change the launchDay according to your needs.
		// The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
		// Thus the launchDay below denotes 7 December, 2017.
		var launchDay = new Date(2018, 9, 8, 12);
		$('#timer').countdown({
			until: launchDay,
			format: 'dHMS'
		});

		// Background video
		var $video = $('#bg-video');
		$video.YTPlayer();
		$('#bg-video-volume').click(function(e){
			var $icon = $(this).find('i');
			e.preventDefault();
			if( $icon.hasClass('fa-volume-off-custom') ) {
				$icon.removeClass('fa-volume-off-custom').addClass('fa-volume-on-custom');
				$video.YTPUnmute();
			} else {
				$icon.removeClass('fa-volume-on-custom').addClass('fa-volume-off-custom');
				$video.YTPMute();
			}
		});
		$('#bg-video-play').click(function(e){
			var $icon = $(this).find('i');
			e.preventDefault();
			if( $icon.hasClass('fa-pause-custom') ) {
				$icon.removeClass('fa-pause-custom').addClass('fa-play-custom');
				$video.YTPPause();
			} else {
				$icon.removeClass('fa-play-custom').addClass('fa-pause-custom');
				$video.YTPPlay();
			}
		});
		if ( !$('.mb_YTPlayer').length ) {
			$('#bg-video-controls').hide();
		}

		// Subscribe form
		$('#mc-embedded-subscribe-form').validate({
			rules: {
				newsletter_email: {
					required: true,
					email: true
				}
			},
			messages: {
				newsletter_email: {
					required: 'Email address is required',
					email: 'Email address is not valid'
				}
			},
			errorElement: 'span',
			errorPlacement: function(error, element){
				error.appendTo(element.parent());
			},
			submitHandler: function(form){
				var formData = {},
					dataArray = $(form).serializeArray(),
					formUrl = $(form).attr('action');
				formUrl = formUrl.replace('/post?u=', '/post-json?u=');
				formUrl += '&c=?';
				$.each(dataArray, function (index, item) {
					formData[item.name] = item.value;
				});
				$('#mce-response').hide();
				$('#mce-loading').slideDown(200).animate({ opacity: 1 }, { queue: false, duration: 400 });
				$.ajax({
					url: formUrl,
					type: 'GET',
					data: formData,
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					success: function(response, text){
						$('#mce-loading').animate({opacity: 0}, function(){
							$(this).hide();
							if (response.result == 'success'){
								$('#mce-response').html(response.msg).slideDown(200).animate({ opacity: 1 }, { queue: false, duration: 400 });
								$(form).each(function(){
									this.reset();
								});
							} else {
								$('#mce-response').html(response.msg).slideDown(200).animate({ opacity: 1 }, { queue: false, duration: 400 });
							}
						});
					},
					error: function (response, text) {
						console.log('mailchimp ajax submit error: ' + text);
					}
				});
				return false;
			}
		});

		// Modal
		$('#modal-open, #modal-close').on('click', function(e){
			$('body').toggleClass('modal--opened');
			e.preventDefault();
			$.backstretch('resize');
		});

	});

})(jQuery);