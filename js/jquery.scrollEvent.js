(function($) {
	$.fn.scrollEvent = function (options) {
		var settings = {
			'position': 'top',
			'onReach': function () {
			},
			'onLeave': function () {
			},
			'onResize': function () {
			}
		};
		return this.each(function () {
			if (options) {
				$.extend(settings, options);
			}

			var $this = $(this);

			var point;

			var calculatePoint = function(){
				switch(settings.position){
					case 'top':{
						point = $this.offset().top;
						break;
					}
					case 'bottom':{
						point = $this.offset().top + $this.innerHeight();
						break;
					}
					case 'center':{
						point = $this.offset().top + $this.innerHeight()/2;
						break;
					}
					default:{
						var pos = parseInt(settings.position);
						if(isNaN(pos)) pos = 0;
						point = $this.offset().top + pos;
						break;
					}
				}
			};
			calculatePoint();

			var flagReach = false;
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= point) {
					if(flagReach) {
						settings.onReach();
					}
					flagReach = false;
				}
				else {
					if(!flagReach) {
						settings.onLeave();
					}
					flagReach = true;
				}
			}).resize(function () {
					calculatePoint();
					settings.onResize();
				});
		});
	};
})(jQuery);