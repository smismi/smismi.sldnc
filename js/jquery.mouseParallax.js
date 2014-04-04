;
(function ($) {
	$.fn.mouseParallax = function (options) {
		var defaults = {
			el: "div"
		};
		var options = {};
		return this.each(function () {


			if (options) {
				$.extend(defaults, options);
			}
			var settings = defaults;

 			var $this = $(this);

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
					$(this).children(settings.el).each(
						function(){
							var diffX = $(_this).width();
							var diffY = $(_this).height();

							var myX = diffX * (mouseXPercent  / ($(this).data('speed') || 1)); //) / 100) / 2;


							var myY = diffY * (mouseYPercent  / ($(this).data('speed') || 1));


							var cssObj = {
								'left': myX + 'px',
								'top': myY + 'px'
							}
							$(this).animate(cssObj,{duration: 50, queue: false, easing: 'linear'});

						}
					);

				}
			);

		});
	};
})(jQuery);