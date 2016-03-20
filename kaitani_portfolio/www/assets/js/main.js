$(document).ready(function(){

	$('#left_door_fill').animate({'height': '100%'}, 1200, 'easeOutBounce', function(){
		$('#right_door_fill').animate({'height': '100%'}, 1200, 'easeOutBounce', function(){
			$('#yin').animate({'top': '15%'}, 900, 'easeInBounce', function(){
				$('#yang').animate({'bottom': '15%'}, 900, 'easeOutBounce', function(){
					$('#separator_left').animate({'height': '100%'}, 1200, 'linear')
					$('#separator_right').animate({'height': '100%'}, 1200, 'linear', function(){
						$('#right_door').animate({'marginRight': '-50%'}, 1200, 'linear')
						$('#left_door').animate({'marginLeft': '-50%'}, 1200, 'linear', function(){
							$('header .logo').fadeIn(800, function(){
								$('header nav').fadeIn(800, function(){
									$('#footer_content').fadeIn(800, function(){

									})
								})
							})
						})
					})
				});
			});
		});
	});



	/**
	*
	* Extension Jquery permettant de remplacer une class
	*
	*/
	$.fn.replaceClass = function(oldClass, newClass){
		return this.each(function(){
		  $(this).removeClass(oldClass).addClass(newClass);
		})
	}

})