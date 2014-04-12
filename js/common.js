//define namespace
var SL = {

	controller: null,
	pager: null,
	init: function() {
		console.log("1. init");



//		cache blocks
		SL.pager = $("#pager_nav");







//		SL.cropViewport();
//		SL.preloadImage();
//
//		SL.initPager();
//
		SL.initScrollMagik();

//
//
//
//		SL.initParallax1();
//		SL.initParallax2();
//		SL.initParallax3();
//		SL.initParallax4();
//		SL.initParallax5();
//
//
//		SL.initInterActive5();











	},
	preloadImage: function() {
		console.log("3. preloadImage   ---    start");


		var contentWrapper =  $('#content-wrapper');
		contentWrapper.css('opacity', 0);

		$(window).load(function() {
			contentWrapper.animate({'opacity': 1}, 800);
		});


		SL.overlay = $("<div id='overlay'></div>").appendTo('body');

		SL.pagePreloader = $("<div class='cup-spinner'></div>").appendTo(SL.overlay);



		var imagesLoaded = 0;
		$(document).on('imgloaded', function(ev, imIndex, imgCounter) {
			imagesLoaded += 1;
			var preloadDelta = imgCounter + 1;
			percents = imagesLoaded * 100 / imgCounter;
			SL.pagePreloader
				.addClass("spining");

//			console.log(percents, imagesLoaded);


			if (imgCounter == imagesLoaded) {


				$(window).load(function() {
					console.log("4. preloadImage   ---    start");
					$(document).off('imgloaded');


					SL.runCupAnimation();
				})

			}

		});

		loadImages('*');



		function loadImages(collection) {
			'use strict';

			var bgRe = /url\((?:\'|\")?([^'"]+)(?:\'|\")?\)/,
				doc = $(document),
				imagesAll = $.apply($, arguments)
					.map(function() {
						var src,
							match;
						if (this instanceof HTMLImageElement) {
							src = this.src;
						} else {
							match = $(this).css('backgroundImage').match(bgRe);
							if (!match) return null;
							src = match[1];
						};
						return src;
					}
				).get(),
				images = [],
				len;
			imagesAll.forEach(function(src) {
					if (!src || (images.indexOf(src) > -1)) return;
					images.push(src);
				}
			);
			len = images.length;

			images.forEach(function(src, idx) {
					var img = new Image();
					img.onload = function() {

						doc.trigger('imgloaded', [idx, len]);
						img.onload = null;
					};
					img.src = src;
				}
			);
		};
	},
	runCupAnimation: function() {




		SL.cup = $("<div id='cup'></div>").addClass("cup_00").appendTo($("body"));


		var i = 0; // current iteration value.

		function changeClass(){


				if (i == 5) {
					SL.unCropViewport();

				}

				if (i == 25) {

					clearInterval(timerId);

					$(".section-1-bg-4").show();
					SL.cup.fadeOut(1000, function(){
						$(this).remove();
					})



					console.log("4. preloadImage   ---    done");

					SL.runScene1();

					return;
				}

				var _i = (i<10)?"0"+i:i;

				SL.cup.addClass("cup_" + _i);

				i++;



		}
		var timerId = setInterval(changeClass, 30);

	},
	cropViewport: function() {

		console.log("2. cropViewport   ---    init");



//		$("#content-wrapper").css({opacity: 0, overflow: "hidden"});
		$(".header").css({top: -300, opacity: 0});
		$(".pager").css({right: -300, opacity: 0});







	},
	unCropViewport: function() {


		SL.pagePreloader.hide().remove();


 		SL.overlay.animate({opacity: 0}, 900, function(){
			$(this).remove()
		});

//		$("#content-wrapper").animate({opacity: 1, overflow: "auto"}, 1000, function() {


			$(".header").animate({top: 0, opacity: 1}, 600);
			$(".pager").animate({right: 0, opacity: 1}, 600);

			console.log("5. unCropViewport   ---    done");

//		})





	},

	runScene1: function() {

		console.log("6. runScene1   ---    run");



//		TweenMax.set("#section-1 .section-1-bg-2", {x: "-100%", opacity: 0});
//		TweenMax.set("#section-1 .section-1-bg-4", {x: "200%", opacity: 0});


//		TweenMax.set("#section-1 .section-1-bg-3", {scale: 0, opacity: 0});

		// build tween
//		var tween1 = new TimelineMax()
//			.add(
//				TweenMax.to("#section-1 .section-1-bg-2", 1, {x: 0, opacity: 1,
//					onStart: function () {console.log("#section-1 .section-1-bg-2 -- start")},
//				})
//			);
//		var tween2 = new TimelineMax()
//			.add(
//				TweenMax.to("#section-1 .section-1-bg-4", 1, {x: "100%", opacity: 1,
//					onStart: function () {console.log("#section-1 .section-1-bg-2 -- start")},
//				})
//			);


		$(".section-1-bg-2").animate({left: "10%", opacity: 1}, 300, "easeOutCirc");
		$(".section-1-bg-3").animate({right: "10%", opacity: 1}, 300, "easeOutCirc", function(){

				$(".section-1-bg-25").animate({opacity:1}, 700, "easeOutCirc");

		});

//		var tween3 = new TimelineMax()
//			.add(
//				TweenMax.to("#section-1 .section-1-bg-3", 1, {scale: 1, opacity: 1,
//					onStart: function () {console.log("#section-1 .section-1-bg-2 -- start")},
//				})
//			);


	},

	initScrollMagik: function() {


		console.log("?. initScrollMagik   ---    init");


		SL.controller = new ScrollMagic({
			globalSceneOptions: {
				triggerHook: "onLeave"
			}
		})
	},
	initParallax1: function() {
		console.log("?. initParallax1   ---    init");

		// parallax1
		new ScrollScene({
			triggerElement: "#section-1",
			duration: 1000,
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook(.5)
			.on("enter", function (event) {
				SL.setPager(1);
			})
 		;

	},
	initParallax2: function() {
		console.log("?. initParallax2   ---    init");

		// parallax2
		new ScrollScene({
			triggerElement: "#section-2",
			duration: $(window).height(),
			offset: -200
		})
			.addTo(SL.controller)
			.triggerHook(0.5)
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-1 .wrapper", 1, {y:0}, {y:200}),
			]))
			.on("enter", function (event) {
				SL.setPager(2);
			})
 		;

	},
	initParallax3: function() {
		console.log("?. initParallax3   ---    init");

		// parallax3
		new ScrollScene({
			triggerElement: "#section-3",
			duration: $(window).height(),
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook(0.5)
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-2 .wrapper", 1, {y:0}, {y:200}),
			]))
			.on("enter", function (event) {
				SL.setPager(3);
			})
 		;


	},
	initParallax4: function() {
		console.log("?. initParallax4   ---    init");

		// parallax3
		new ScrollScene({
			triggerElement: "#section-4",
			duration: $(window).height(),
			offset: -200
		})
			.addTo(SL.controller)
			.triggerHook(0.5)
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-3 .wrapper", 1, {y:0}, {y:200}),
			]))
			.on("enter", function (event) {
				SL.setPager(4);
			})
 		;

	},
	initParallax5: function() {
		// parallax5
		console.log("?. initParallax5   ---    init");

		// parallax3
		new ScrollScene({
			triggerElement: "#section-5",
			duration: $(window).height(),
			offset: -200
		})
			.addTo(SL.controller)
			.triggerHook(0.5)
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-4 .wrapper", 1, {y:0}, {y:200}),
			]))
			.on("enter", function (event) {
				SL.setPager(5);
			})
 		;

	},
	initInterActive2: function() {





	},
	setPager: function(index) {

		var _i = index - 1;
		$("ul li", SL.pager).removeClass("active");
		$("ul li:eq(" + _i + ")", SL.pager).addClass("active");



	},
	initPager: function() {

		$("li", SL.pager).on("click", function(){

			var _target = $(this).data("target");
			$("body").scrollTo( "#section-" + _target , 400 , function(){
				SL.setPager(_target);
			});


		})


	},
	initInterActive5: function() {
		// interactive5
		console.log("?. interactive5   ---    init")


		$(".page_item_caption abbr").css({opacity:0, top: -46});
//		$(".page_item_caption i, .page_item_caption em, .page_item_caption .description").css({opacity:0});


		runFirstPage();


		function runFirstPage() {
			$("#section-5-page-1 abbr").animate({opacity:1,  top: 0}, 300, function() {
				runSecondPage();
			});
		}

		function runSecondPage() {
			$("#section-5-page-2 abbr").animate({opacity:1,  top: 0}, 300, function() {
				runThirdPage();
			});
		}

		function runThirdPage() {
			$("#section-5-page-3 abbr").animate({opacity:1,  top: 0}, 300, function() {
				runItAll();
			});
		}

		function runItAll() {
			$(".page_item_caption .description").animate({opacity:1}, 300, function() {
				bindMouse();
			});
		}



		function bindMouse() {

			console.log("?. bindMouse   ---    init   --- for");


			$(".page_item_caption").on("mouseenter mouseover", function(){






				$(this).addClass("hovered");
				var _this = this;



			});
			$(".page_item_caption").on("mouseleave", function(){

				$(this).removeClass("hovered").removeClass("effect1").removeClass("effect2").removeClass("effect3");


			});



		}



	},









//	otheruglystuff for internal use
	func: {

		 whichTransitionEvent : function(){
			var t;
			var el = document.createElement('fakeelement');
			var transitions = {
				'transition':'transitionend',
				'OTransition':'oTransitionEnd',
				'MozTransition':'transitionend',
				'WebkitTransition':'webkitTransitionEnd'
			}

			for(t in transitions){
				if( el.style[t] !== undefined ){
					return transitions[t];
				}
			}
		}


}



}





