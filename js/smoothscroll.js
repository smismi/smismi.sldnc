var effects = (function() {
	var slides = {};

	var createSlide = function(number, beforeS, circleC, circleB) {
		slides[number] = {
			deferreds : [],
			timeouts : [],
			functions : {},
			before : beforeS,
			circleCss : circleC,
			circleBg : circleB
		};
	};

	var createEffect = function(name, time, number, func) {
		var effect = {};
		effect.time = time;
		effect.func = func;
		slides[number].functions[name] = effect;
	};

	var beforeSlide = function(number) {
		if (slides[number]) {
			slides[number].before();
		}
	};

	var clearSlideTimeouts = function(slide) {
		$.each(slide.timeouts, function() {
			clearTimeout(this);
		});
	};

	var clearQuery = function() {
		$.each(slides, function() {
			clearSlideTimeouts(this);
		});
	};

	var clearSlideDeferreds = function(number) {
		slides[number].deferreds.length = 0;
	};

	var clearSlidesDeferreds = function() {
		slidesDeferreds.length = 0;
	};

	var playSlide = function(number, defer) {
		clearQuery();
		if (slides[number]) {
			$.each(slides[number].functions, function() {
				playEffect(this, number);
			});
			$.when.apply(null, slides[number].deferreds).done(function() {
				clearSlideDeferreds(number);
				defer.resolve();
			});
		} else
			defer.resolve();
	};

	var expandCircle = function(number) {
		if (!$.support.leadingWhitespace) {$('#circle').hide();}
		else{
			$('#circle').css({
				backgroundImage : 'none'
			}).animate(slides[number].circleCss, 500).promise().done(function() {
					$('#circle').css({
						backgroundImage : slides[number].circleBg
					});
				});
		}
	};

	var playEffect = function(effect, number) {
		var deferred = $.Deferred();
		slides[number].deferreds.push(deferred);
		var q = setTimeout(function() {
			effect.func(deferred)
		}, effect.time);
		slides[number].timeouts.push(q);
	};

	var initEffects = function() {
		createEffect('fadeInAll', 0, 0, function(deferred) {
			$('#slide-first h1, #slide-first h2, #slide-first .text').fadeIn(1000, 'linear').promise().done(function() {
				$('#slide-first .about-button').fadeIn(500, 'linear');
				$('#slide-first .services').fadeIn(500, deferred.resolve).promise().done(function() {
					$('#slide-first .services ul li').each(function(index, el) {
						setTimeout(function() {
							$(el).animate({
								opacity : 1
							}, 500, 'linear')
						}, 100 * (index));
						$(this).click(
							function(event){
								event.preventDefault();
								siteSlideshow.gotoSlide(index+1)
							}
						);
					});
				});
			});
		});
		createEffect('fadeInAll', 0, 1, function(deferred) {
			$('#auto').animate({
				left : '332px'
			}, 500, 'linear').promise().done(function() {
					fallingTreats.start();
					$('#slide-second .text-block').fadeIn(1000, 'linear', deferred.resolve);
					$('#slide-second .services li').fadeIn(500, 'linear');
				});
		});

		createEffect('fadeInAll', 0, 2, function(deferred) {
			$('#house').fadeIn(500, 'linear').promise().done(function() {
				fallingTreats.start();
				$('#slide-third .text-block').fadeIn(1000, 'linear', deferred.resolve);
				$('#slide-third .services li').fadeIn(500, 'linear');
			});
		});

		createEffect('fadeInAll', 0, 3, function(deferred) {
			$('#plane img').animate({
				height : '111px',
				width : '328px'
			}, 500, 'linear').promise().done(function() {
					fallingTreats.start();
					$('#slide-fourth .text-block').fadeIn(1000, 'linear', deferred.resolve);
					$('#slide-fourth .services li').fadeIn(500, 'linear');
				});
		});

		createEffect('fadeInAll', 0, 4, function(deferred) {
			$('#people').fadeIn(500, 'linear').promise().done(function() {
				fallingTreats.start();
				$('#slide-fifth .services li').fadeIn(500, 'linear');
				$('#slide-fifth .text-block').fadeIn(1000, 'linear', deferred.resolve)
			});
		});
		createEffect('fadeInAll', 0, 5, function(deferred) {
			$('#slide-sixth h1, #slide-sixth h2, #slide-sixth .text').fadeIn(1000, 'linear').promise().done(function() {
				$('#slide-sixth .services').fadeIn(500, deferred.resolve).promise().done(function() {
					$('#slide-sixth .services ul li').each(function(index, el) {
						setTimeout(function() {
							$(el).animate({
								opacity : 1
							}, 500, 'linear')
						}, 100 * (index));
					});
				});
			});
		});
	};

	var initSlides = function() {
		var height = parseInt(window.innerHeight) - $('#menu').innerHeight() - $('#footer').innerHeight() - 10;
		createSlide(0, function() {
			$('#slide-first h1, #slide-first h2, #slide-first .text, #slide-first .about-button, #slide-first .services').hide();
			$('#slide-first .services li').css({
				opacity : 0
			});
			fallingTreats.stop();
		}, {
			'border-color' : 'white',
			'border-radius' : '400px',
			'border-width' : '90px',
			'height' : '495px',
			'left' : '163px',
			'opacity' : 0.5,
			'top' : '-5px',
			'width' : '495px',
			'z-index' : -1
		}, 'url("/static/img/first-page/first-slide/circle_bg.png")');
		createSlide(1, function() {
			var windowW = parseInt(window.innerWidth);
			$('#slide-second .text-block, #slide-second .services li').hide();
			$('#auto').css({
				left : '-' + windowW + 'px'
			});
		}, {
			'border-color' : '#ff7200',
			'border-radius' : '400px',
			'border-width' : '35px',
			'height' : '367px',
			'left' : '277px',
			'opacity' : 1,
			'top' : '155px',
			'width' : '375px',
			'z-index' : 0
		}, 'url("/static/img/first-page/first-slide/circle_bg.png")');
		createSlide(2, function() {
			var windowW = parseInt(window.innerWidth);
			$('#slide-third .text-block, #slide-third .services li, #house').hide();
		}, {
			'border-color' : '#16b4dc',
			'border-radius' : '400px',
			'border-width' : '35px',
			'height' : '367px',
			'left' : '277px',
			'opacity' : 1,
			'top' : '155px',
			'width' : '375px',
			'z-index' : 0
		}, 'url("/static/img/first-page/fourth-slide/circle_bg.png")');
		createSlide(3, function() {
			var windowW = parseInt(window.innerWidth);
			$('#slide-fourth .text-block, #slide-fourth .services li').hide();
			$('#plane img').css({
				height : 0,
				width : 0
			});
		}, {
			'border-color' : '#e038d6',
			'border-radius' : '400px',
			'border-width' : '35px',
			'height' : '367px',
			'left' : '277px',
			'opacity' : 1,
			'top' : '155px',
			'width' : '375px',
			'z-index' : 0
		}, 'url("/static/img/first-page/fourth-slide/circle_bg.png")');
		createSlide(4, function() {
			var windowW = parseInt(window.innerWidth);
			$('#slide-fifth .text-block, #slide-fifth .services li, #people').hide();
		}, {
			'border-color' : '#d13207',
			'border-radius' : '400px',
			'border-width' : '35px',
			'height' : '367px',
			'left' : '277px',
			'opacity' : 1,
			'top' : '155px',
			'width' : '375px',
			'z-index' : 0
		}, 'url("/static/img/first-page/fifth-slide/circle_bg.png")');
		createSlide(5, function() {
			$('#slide-sixth h1, #slide-sixth h2, #slide-sixth .text, #slide-sixth .services').hide();
			$('#slide-sixth .services li').css({
				opacity : 0
			});
			fallingTreats.stop();
		}, {
			'border-color' : 'white',
			'border-radius' : '400px',
			'border-width' : '135px',
			'height' : '770px',
			'left' : '-20px',
			'opacity' : 0.5,
			'top' : '-191px',
			'width' : '770px',
			'z-index' : -2
		}, 'url("/static/img/first-page/first-slide/circle_bg.png")');
	};

	var init = function() {
		initSlides();
		initEffects();
	};
	return {
		initialize : init,
		playSlide : playSlide,
		beforeSlide : beforeSlide,
		expandCircle : expandCircle
	};
})();

///////////////////////////
var siteSlideshow = (function() {
	//cycle options
	var cycle = {
		easing : 'linear',
		fx : 'fade',
		speed : 500
	};
	// container id, classes
	var classes = {
		containerId : 'slideshow',
		slides : 'slides',
		intervals : 'intervals',
		circle : 'circle',
		forward : 'forward',
		backward : 'backward',
		parallaxFront : 'parallax-front',
		parallaxBack : 'parallax-back'
	};
	//
	var animationDisabled = false;
	var itemsCount = 0;
	var timeline = 360000;
	var intervalsWidth = 0;
	var slideTimeout = null;
	//
	var mainDeferred = null;
	var slidedWithoutHash = false;

	var currentSlideByHash = function() {
		var hash = window.location.hash || '#slide-1';
		var num = parseInt(hash.replace(/[slide#\-\/!]/g, '') - 1);
		return (num>=0&&num<itemsCount)?num:0;
	};

	var current = currentSlideByHash();
	var init = function() {
		$(window).bind("hashchange", function () {
			var num = currentSlideByHash();
			if (slidedWithoutHash == false) { if(num>=0&&num<itemsCount) gotoSlide(num); }
			slidedWithoutHash = false;
		});
		beforeSlideshow();
		itemsCount = $('.' + classes.intervals).children().length;
		cloneIntervals();
		effects.initialize();
		initArrows();
		initCycle();
		$('.' + classes.slides).cycle('pause');

		$(window).trigger("hashchange");
	};

	var centerSlideshow = function() {
		var height = parseInt(window.innerHeight) - $('#menu').innerHeight() - $('#footer').innerHeight();
		$('#content').css({
			'height' : height + 'px'
		});
		$('#slideshow').css({
			'height' : height + 'px'
		});
		//$('#' + classes.containerId + ' .' + classes.slides).css({'padding-bottom': padding + 'px'});
	};

	var beforeSlideshow = function() {
		//centerSlideshow();
	};

	var playerPause = function() {
		$('.overflow').stop();
		$('.' + classes.slides).cycle('pause');
		if (mainDeferred != null) {
			mainDeferred.resolve();
			if (slideTimeout != null)
				clearTimeout(slideTimeout);
		}
	};

	var initIntervals = function(intervals, intervalWidth) {
		$(intervals).children().each(function(index) {
			$(this).css({
				cursor : 'pointer',
				width : intervalWidth + 'px'
			});
			$(this).bind('click', function(event) {
				event.preventDefault();
				gotoSlide(index);
			});
		});
	};

	var nextSlideNumber = function(number) {
		return (number + 1) % itemsCount;
	};

	var cloneIntervals = function() {
		intervalsWidth = $('.' + classes.intervals).innerWidth();
		var intervalWidth = intervalsWidth / itemsCount;
		initIntervals('.' + classes.intervals, intervalWidth);

		//overflow for cloned intervals
		var height = parseInt(window.innerHeight) - $('#menu').innerHeight() - $('#footer').innerHeight() - 29;
		var overflow = $('<div></div>');
		$(overflow).addClass("overflow").appendTo($('#' + classes.containerId));
		$(overflow).css({
			height : $('.' + classes.intervals).innerHeight(),
			overflow : 'hidden',
			bottom : '73px',
			width : 0 + 'px'
		});

		//underflow
		var underflow = $('<div></div>');
		$(underflow).addClass('underflow').appendTo(overflow);

		//cloned
		var clonedIntervals = $('.' + classes.intervals).clone().appendTo(underflow);
		$(clonedIntervals).removeClass(classes.intervals);
		initIntervals(clonedIntervals, intervalWidth);
		$(clonedIntervals).children().each(function(index){
			$(this).hover(function(){
				$('.' + classes.intervals).children().eq(index).addClass("hover");
			},function(){
				$('.' + classes.intervals).children().eq(index).removeClass("hover");
			});
		});
	};

	var initCycle = function() {
		$('.' + classes.slides).cycle({
			startingSlide: current,
			easing : cycle.easing,
			fx : cycle.fx,
			speed : cycle.speed,
			timeout : timeline / itemsCount,
			before : function(currSlideElement, nextSlideElement) {
				beforeSlide(currSlideElement, nextSlideElement);
				slidedWithoutHash = true;
				window.location.hash = "slide-"+ (parseInt(current) + 1) + "";
			},
			after : function(currSlideElement, nextSlideElement) {
				afterSlide(currSlideElement, nextSlideElement);
			},
			cleartypeNoBg : true
		});
	};

	var initArrows = function() {
		$('.' + classes.forward).bind('click', function(event) {
			event.preventDefault();
			playerPause();
			$('.' + classes.slides).cycle('next');
		});
		$('.' + classes.backward).bind('click', function(event) {
			event.preventDefault();
			playerPause();
			$('.' + classes.slides).cycle('prev');
		});
	};

	var activateInterval = function(number) {
		$('.' + classes.intervals).children().removeClass('active').eq(number).addClass('active');
	};

	var beforeSlide = function(currSlideElement, nextSlideElement) {
		current = itemsCount - ($(nextSlideElement).nextAll().length) - 1;
		effects.beforeSlide(current);
		activateInterval(current);
		parallaxBg(current);
		shrinkBar(current);
		effects.expandCircle(current);
	};

	var afterSlide = function(currSlideElement, nextSlideElement) {
		current = itemsCount - ($(nextSlideElement).nextAll().length) - 1;
		var defer = $.Deferred();
		mainDeferred = defer;
		effects.playSlide(current, defer);
		$.when(defer).done(function() {
			expandBar(current);
			slideTimeout = setTimeout(function() {
				gotoSlide(nextSlideNumber(current))
			}, timeline / itemsCount);
		});
	};

	var parallaxBg = function(number) {
		var windowW = parseInt(window.innerWidth);
		var deltaF = windowW - 8400 / itemsCount;
		var posF = (8400 / itemsCount * number) - deltaF / 2;
		posF *= (-1);
		$('.' + classes.parallaxFront).stop().animate({
			backgroundPosition : posF + 'px bottom'
		}, 1500);
		var deltaB = windowW - 10800 / itemsCount;
		var posB = (10800 / itemsCount * number) - deltaB / 2;
		posB *= (-1);
		$('.' + classes.parallaxBack).stop().animate({
			backgroundPosition : posB + 'px bottom'
		}, 1500);
	};

	var shrinkBar = function(number) {
		var intervalWidth = intervalsWidth / itemsCount;
		var startWidth = intervalWidth * number;
		$('.overflow').stop().animate({
			width : startWidth + "px"
		}, 200);
	};

	var expandBar = function(number) {
		var intervalWidth = intervalsWidth / itemsCount;
		var startWidth = intervalWidth * number;
		$('.overflow').stop().animate({
			width : (startWidth + intervalWidth) + "px"
		}, (timeline / itemsCount), 'linear');
	};

	var gotoSlide = function(number) {
		if (number != current) {
			playerPause();
			$('.' + classes.slides).cycle(number);
		}
	};

	return {
		gotoSlide : gotoSlide,
		initialize : init
	};
})();
