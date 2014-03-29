/*!
 * windows: a handy, loosely-coupled jQuery plugin for full-screen scrolling windows.
 * Version: 0.0.1
 * Original author: @nick-jonas
 * Website: http://www.workofjonas.com
 * Licensed under the MIT license
 */

;
(function ($) {
	$.fn.mouseParallax = function (options) {
		var defaults = {

		};
		return this.each(function () {
			if (options) {
				$.extend(defaults, options);
			}

			var $this = $(this);

//			var point;
//
//			var calculatePoint = function () {
//				switch (settings.position) {
//					case 'top':
//					{
//						point = $this.offset().top;
//						break;
//					}
//					case 'bottom':
//					{
//						point = $this.offset().top + $this.innerHeight();
//						break;
//					}
//					case 'center':
//					{
//						point = $this.offset().top + $this.innerHeight() / 2;
//						break;
//					}
//					default:
//					{
//						var pos = parseInt(settings.position);
//						if (isNaN(pos)) pos = 0;
//						point = $this.offset().top + pos;
//						break;
//					}
//				}
//			};
//			calculatePoint();
//
//
				$(this).mousemove(
					function(e){

						var _this = this;

						/* Work out mouse position */
						var offset = $(this).offset();
						var xPos = e.pageX - offset.left;
						var yPos = e.pageY - offset.top;

						/* Get percentage positions */
						var mouseXPercent = Math.round(xPos / $(this).width() * 100);
						var mouseYPercent = Math.round(yPos / $(this).height() * 100);


						/* Position Each Layer */
						$(this).children('div').each(
							function(){
								var diffX = $(_this).width() - $(this).width();
								var diffY = $(_this).height() - $(this).height();

								var myX = diffX * (mouseXPercent / 100 / ($(this).data('speed') || 1)); //) / 100) / 2;


								var myY = diffY * (mouseYPercent / 100 / ($(this).data('speed') || 1));
								var myY = 0;


								var cssObj = {
									'left': myX + 'px',
									'top': myY + 'px'
								}
								//$(this).css(cssObj);
								$(this).animate(cssObj,{duration: 50, queue: false, easing: 'linear'});

							}
						);

					}
				);



		});
	};
})(jQuery);