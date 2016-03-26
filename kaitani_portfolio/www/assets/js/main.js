$(document).ready(function(){

	var $blocAnimation = $('#bloc_animation');
	var $circle = $('.ball');
	var $fil = $('#separator');
	var $rightDoor = $('#right_door');
	var $leftDoor = $('#left_door');
	var $rightDoorFill = $('#right_door_fill');
	var $leftDoorFill = $('#left_door_fill');
	var $yin = $('#yin');
	var $yang = $('#yang');
	var $yinPoint = $('.yin-point');
	var $yangPoint = $('.yang-point');
	var $leftSeparator = $('#separator_left')
	var $rightSeparator = $('#separator_right')
	var $header = $('header');
	var $logo = $('header .logo');
	var $nav = $('header nav');
	var $footerContent = $('footer #footer_content');
	var $footer = $('footer');
	var $lueur = $('.lueur');
	var speedRatio = 1;

	startAnimation();

	function startAnimation(){
		$circle.animate({'top': '30%'}, 900 * speedRatio, 'easeOutBounce', function(){
			$fil.animate({'height': '30%'}, 450 * speedRatio, 'linear', function(){
				$circle.animate({'top': '102%'}, 1100 * speedRatio, 'easeInElastic')
				$fil.animate({'height': '102%'}, 1100 * speedRatio, 'easeInElastic', function(){
					$(this).fadeOut(800 * speedRatio);
					$circle.fadeOut(800 * speedRatio, function(){
						$rightDoorFill.animate({'height': '100%'}, 1200 * speedRatio, 'easeOutBounce', function(){
							$yin.animate({'top': '14%'}, 900 * speedRatio, 'easeInBounce', function(){
								$yang.animate({'bottom': '14%'}, 900 * speedRatio, 'easeOutBounce', function(){
									$leftSeparator.animate({'height': '50%'}, 600 * speedRatio, 'linear')
									$rightSeparator.animate({'height': '50%'}, 600 * speedRatio, 'linear')
									$yin.animate({'top': $leftDoorFill.height()/2 - 52.5}, 600 * speedRatio, 'linear')
									$yang.animate({'bottom': $rightDoorFill.height()/2 - 52.5}, 600 * speedRatio, 'linear', function(){
										$yin.animate({'left': $leftDoorFill.width()}, 700 * speedRatio, 'easeInQuart')
										$yang.animate({'right': $rightDoorFill.width()}, 700 * speedRatio, 'easeInQuart', function(){
											$leftSeparator.animate({'height': '102%'}, 800 * speedRatio, 'linear')
											$rightSeparator.animate({'height': '102%'}, 800 * speedRatio, 'linear', function(){
												$yangPoint.fadeIn(800 * speedRatio)
												$yinPoint.fadeIn(800 * speedRatio, function(){
													$rightDoor.animate({'marginRight': '-50%'}, 1200 * speedRatio, 'easeInExpo')
													$leftDoor.animate({'marginLeft': '-50%'}, 1200 * speedRatio, 'easeInExpo', function(){
														$header.animate({'left': '0%'}, 1000 * speedRatio, 'linear', function(){
															$header.css({'border-bottom':'1px #333 solid'})
															$logo.fadeIn(900 * speedRatio);
															$nav.delay(600 * speedRatio).fadeIn(900 * speedRatio, function(){
																$lueur.fadeIn(800 * speedRatio)
																$footer.css({'background': 'linear-gradient(#222, #000)'})
																$footerContent.fadeIn(800 * speedRatio, function(){
																	$blocAnimation.remove();
																})
															});
															$footer.animate({'left': '0%'}, 1000 * speedRatio, 'linear', function(){
																$footer.css({'border-top':'1px #222 solid'})
															});
														});
													});
												})
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}


	

	$('.burger-nav').on('click', function(){

		if($('.bloc_nav').hasClass('inactive')){
			$header.css('border', '1px #000 solid');
			$('.bloc_nav').slideToggle(400);
			$('.bloc_nav').removeClass('inactive');
		} else {
			$('.bloc_nav').slideToggle(400, function(){
				$header.css('border-bottom', '1px #333 solid');
				$('.bloc_nav').addClass('inactive');
			});
		}
		
	})



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