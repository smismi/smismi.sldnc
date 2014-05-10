//define namespace
var SL = {

	controller: null,
	pager: null,
	globals: {
		cupDelay: 1000


	},
	init: function() {
		console.log("1. init");



//		cache blocks
		SL.pager = $("#pager_nav");
		SL.mainmenu = $("#header");
		SL.header = $(".header");
		SL.mobilemenu = $("#mobilemenu");
		SL.contentWrapper = $('#content-wrapper');
		SL.scrollTop = $('#back_to_top');

		SL.cropViewport()
			.test()
//			SL.unCropViewport();
			.preloadImage(SL.unCropViewport);

		SL.initHeaderMenu();

	},

	cropViewport: function(callback) {

		console.log("2. cropViewport   ---    init");

		if (!SL.func.isPh()) {

			$(".header").css({top: -300, opacity: 0});
			$(".pager").css({right: -300, opacity: 0});

		}





		SL.contentWrapper =  $('#content-wrapper');

		SL.overlay = $("<div id='overlay'></div>").appendTo('body');

		SL.pagePreloader = $("<div class='cup-spinner fonted'></div>").appendTo(SL.overlay);


        if(true) {
	        return this;
        }

	},
	test: function() {
		console.log('test');


		return this;
	},
	preloadImage: function(callback) {
		console.log("3. preloadImage   ---    start");


		var imagesLoaded = 0;


		$(document).on('imgloaded', function(ev, imIndex, imgCounter) {
			imagesLoaded += 1;
 			var preloadDelta = imgCounter + 1;
			percents = imagesLoaded * 100 / imgCounter;
			SL.pagePreloader
				.addClass("spining");

			console.log(percents, imagesLoaded);


			if (imgCounter == imagesLoaded) {


				$(window).load(function() {
					console.log("4. preloadImage   ---    done");
					$(document).off('imgloaded');

					if(callback) setTimeout(callback, SL.globals.cupDelay)


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

		$(window).scrollTop(0);

	},
	runCupAnimation: function() {


		if (SL.func.isPh()) {


			SL.overlay.animate({opacity: 0}, 200, function(){
				SL.pagePreloader.fadeOut(100, function(){
					$(this).remove();
				}).remove();
				$(this).remove();

			});

			SL.initPager();
			SL.initScrollTop();

			SL.initInterActive5();

			$(".wrapper", "#section-1").css("height", $(window).height());

			return;


		}


		$("<img/>")
			.load(function() { console.log("image loaded correctly"); })
			.error(function() { console.log("error loading image"); })
			.attr("src", $("#strangeways").attr("src"))
		;


		SL.cup = $("<div id='cup'></div>").addClass("cup_00").appendTo($("#section-1 .wrapper"));


		var i = 0; // current iteration value.

		function changeClass(){


				if (i == 1) {

					SL.overlay.animate({opacity: 0}, 200, function(){
						SL.pagePreloader.fadeOut(100, function(){
							$(this).remove();
						}).remove();
						$(this).remove();

					});

				}

				if (i == 30) {

					clearInterval(timerId);

					console.log("4. preloadImage   ---    done");

					SL.runScene1();

					return;
				}

				var _i = (i<10)?"0"+i:i;

				SL.cup.removeClass().addClass("cup_" + _i);

				i++;



		}
		var timerId = setInterval(changeClass, 25);




	},
	unCropViewport: function() {

		console.log("5. unCropViewport   ---    start");

		$(window).scrollTop(0);

		SL.runCupAnimation();


	},

	runScene1: function() {


		if(SL.func.isPh())  {



			return;
		}


		$(".section-1-bg-4").show();

		SL.cup.remove();


			console.log("6. runScene1   ---    run");


			$(".section-1-bg-2").animate({left: "10%", opacity: 1}, 800, "easeOutCirc");
			$(".section-1-bg-3").animate({right: "10%", opacity: 1, marginRight: "-150px"}, 800, "easeOutCirc", function(){

				$(".section-1-bg-25").animate({opacity:1}, 1000);

				$(".header").animate({top: 0, opacity: 1}, 600);
				$(".pager").animate({right: 0, opacity: 1}, 600 , function(){


					SL.initScrollMagik();

					SL.initPager();
					SL.initScrollTop();


					SL.initParallax1();
					SL.initParallax2();
					SL.initParallax3();
					SL.initParallax4();
					SL.initParallax5();

			});

		});

	},

	initScrollMagik: function() {


		console.log("?. initScrollMagik   ---    init");


		SL.controller = new ScrollMagic()


	},


	initParallax1: function() {
		console.log("?. initParallax1   ---    init");


		if(Modernizr.touch) {



		} else {

			var tween = new TimelineMax ()
				.add([
					TweenMax.fromTo("#section-1 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-1 .section-1-bg-11",1, {y: 40}, {y: -40, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-1 .section-1-bg-12",1, {y: 60}, {y: -60, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-1 .section-1-bg-25",1, {y: -100}, {y: 100, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-1 .section-1-bg-2",1, {y: 140}, {y: -140, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-1 .section-1-bg-3",1, {y: 140}, {y: -140, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-1 .section-1-bg-4",1, {y: 100}, {y: -100, ease: Linear.easeNone})
				]);

			new ScrollScene({triggerElement: "#section-1", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller).on("enter", function (event) {
					console.log("1st enter")
				})
				.on("leave", function (event) {
					console.log("1st leave")
				});



			// parallax1
			new ScrollScene({
					triggerElement: "#section-1",
					duration: $(window).height(),
					offset: -200
				})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(1);
				});



		};


	},
	initParallax2: function() {

		if(Modernizr.touch) {



		} else {






			var tween = new TimelineMax ()
				.add([
					TweenMax.fromTo("#section-2 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-2 .page_item_ic",1, {y: -100}, {y: 100, ease: Linear.easeNone})
				]);

			new ScrollScene({triggerElement: "#section-2", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller).on("enter", function (event) {
					console.log("2st enter")
				})
				.on("leave", function (event) {
					console.log("2st leave")
				});




			new ScrollScene({triggerElement: "#section-2", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(2);
				});



			new ScrollScene({
					triggerElement: "#section-2",
					duration: $(window).height(),
					offset: -200
				})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(2);
				});



		};





	},
	initParallax3: function() {

		if(Modernizr.touch) {



		} else {






			var tween = new TimelineMax ()
				.add([
					TweenMax.fromTo("#section-3 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-3 .section-big-title",1, {y: -100}, {y: 100, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-3 .section-3-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),



					//				TweenMax.to("#section-3 .section-3-item-4-1", 1, {rotation:  45,  scale: 1.5, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-5", 1, {rotation:  55,  scale:.4, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-6", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),

					TweenMax.fromTo("#section-3 .section-3-item-3", 1, {top: "75%"}, {top: "10%", ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-1", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
									TweenMax.to("#section-3 .section-3-item-3-3", 1, {rotation:  90,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-5", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-6", 1, {rotation:  -34,  scale: 1, ease: Linear.easeNone}),


					TweenMax.fromTo("#section-3 .section-3-item-1", 1, {top: "55%"}, {top: "35%", ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-1-1", 1, {rotation:  60,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-1-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-1-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					]);



			new ScrollScene({triggerElement: "#section-3", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller);

			new ScrollScene({triggerElement: "#section-3", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(3);
				});



			new ScrollScene({
				triggerElement: "#section-3",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(3);
				});


		}

	},
	initParallax4: function() {

		if(Modernizr.touch) {



		} else {

			var tween = new TimelineMax ()
				.add([
					TweenMax.fromTo("#section-4 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-4 .section-big-title",1, {y: -100}, {y: 100, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-4 .section-4-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),
//					TweenMax.to("#section-4 div.wrapper", 1, {backgroundPosition: "0 130px", repeat: -1, delay: 1, repeatDelay: 2, ease: Linear.easeNone}),

					TweenMax.fromTo("#section-4 .section-4-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),

//				TweenMax.to("#section-4 .section-4-item-4-1", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-4-2", 1, {rotation:  90,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-4-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-4-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-4-5", 1, {rotation:  55,  scale: .6, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-4-6", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-4-7", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),

					TweenMax.fromTo("#section-4 .section-4-item-3", 1, {top: "75%"}, {top: "10%", ease: Linear.easeNone}),

//				TweenMax.to("#section-4 .section-4-item-3-1", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-3", 1, {rotation:  55,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-5", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-6", 1, {rotation:  -90,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-7", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-8", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-3-9", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),

					TweenMax.fromTo("#section-4 .section-4-item-1", 1, {top: "55%"}, {top: "35%", ease: Linear.easeNone}),

//				TweenMax.to("#section-4 .section-4-item-1-1", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-1-2", 1, {rotation:  89,  scale: 1, ease: Linear.easeNone}),
//				TweenMax.to("#section-4 .section-4-item-1-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
				]);


			new ScrollScene({triggerElement: "#section-4", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller);

			new ScrollScene({triggerElement: "#section-4", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(4);
					SL.destrotInterActive5();
				});


			new ScrollScene({
				triggerElement: "#section-4",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(4);
				});

		}


	},
	initParallax5: function() {
		// parallax5
		console.log("?. initParallax5   ---    init");

		// parallax5

		if(Modernizr.touch) {



		} else {



			var tween = new TimelineMax ()
				.add([
					TweenMax.fromTo("#section-5 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
					TweenMax.fromTo("#section-5 .section-big-title",1, {marginTop: -100}, {marginTop: 100, ease: Linear.easeNone})
				]);

			new ScrollScene({triggerElement: "#section-5", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller);

			new ScrollScene({triggerElement: "#section-5", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(5);
					SL.initInterActive5();
				});



		}


	},
	setPager: function(index) {

		var _i = index - 1;
		$(SL.pager).attr("class", "").addClass("active_" + index);
		$("ul li", SL.pager).removeClass("active");
		$("ul li:eq(" + _i + ")", SL.pager).addClass("active");

		console.log("active_" + index);


		if (index === 1) {
			SL.scrollTop.css({bottom: -60});
		} else {
			SL.scrollTop.css({bottom: 0});
		}


	},
	initPager: function() {

		$("li", SL.pager).on("click", function(){

			var _target = $(this).data("target");
			$("body").scrollTo( "#section-" + _target , 600 , function(){
				SL.setPager(_target);
			});


		})

		$(".page_item", "#section-2").on("click", function(){

			var _target = $(this).data("target");
			$("body").scrollTo( "#section-" + _target , 600 , function(){
				SL.setPager(_target);
			});


		})




	},
	initScrollTop: function() {

		SL.scrollTop.on("click", function(){

			$("body").scrollTo( "#section-1" , 600 , function(){
				SL.setPager(1);
			});


		})

	},
	initHeaderMenu: function() {


//		SL.mobilemenu.css({height: $(window).height() - 60, overflow: "auto", backgroundColor: "#f00"});


		$(".close_menu", SL.mainmenu).on('click', function(){

			if (SL.header.hasClass("menu_visible")) {




				if ($(".item_link", SL.mobilemenu).hasClass("submenu_visible")) {

					var _sub =  $(".item_link.submenu_visible", SL.mobilemenu).data("target");


					$(".item_link", SL.mobilemenu).removeClass("submenu_visible");

					$(".subnav-" + _sub, SL.mobilemenu).slideUp(function(){

						SL.header.removeClass("menu_visible");

						SL.mobilemenu.animate({"left": "-100%"}, 50);

					});

				} else {


					SL.header.removeClass("menu_visible");

					SL.mobilemenu.animate({"left": "-100%"}, 50);

				}

				SL.preventScroll.off();


			} else {

				SL.header.addClass("menu_visible");

				SL.mobilemenu.animate({"left": "0%"}, 50);





				SL.preventScroll.on();

			}

			return false;


		});
		$(".item_menu", SL.mainmenu).on('click', function(){

			if (SL.header.hasClass("menu_visible")) {




				if ($(".item_link", SL.mobilemenu).hasClass("submenu_visible")) {

					var _sub =  $(".item_link.submenu_visible", SL.mobilemenu).data("target");


					$(".item_link", SL.mobilemenu).removeClass("submenu_visible");

					$(".subnav-" + _sub, SL.mobilemenu).slideUp(function(){

						SL.header.removeClass("menu_visible");

						SL.mobilemenu.animate({"left": "-100%"}, 50);

					});

				} else {


					SL.header.removeClass("menu_visible");

					SL.mobilemenu.animate({"left": "-100%"}, 50);

				}

				SL.preventScroll.off();


			} else {

				SL.header.addClass("menu_visible");

				SL.mobilemenu.animate({"left": "0%"}, 50);





				SL.preventScroll.on();

			}

			return false;


		});
		$(".item_link", SL.mobilemenu).on('click', function(){


			var _sub =  $(this).data("target");

			if ($(this).hasClass("submenu_visible")) {

				$(this).removeClass("submenu_visible");

				$(".subnav-" + _sub, SL.mobilemenu).slideUp();

			} else {


				$(this).addClass("submenu_visible");

				$(".subnav-" + _sub, SL.mobilemenu).slideDown();

			}
			return false;
		});

	},
	preventScroll: {
		on: function () {

			$("html, body").css({overflow: "hidden"});

		},
		off: function () {

			$("html, body").css({overflow: "auto"});

		}
	},
	destrotInterActive5 : function() {

		$(".page_item_caption abbr").css({opacity:0, top: -46});
		$(".page_item_caption .description").css({opacity:0, });
//		$(".page_item_caption i, .page_item_caption em, .page_item_caption .description").css({opacity:0});

	},
	initInterActive5: function() {
		// interactive5

		setTimeout(runFirstPage, 300);


		function runFirstPage() {
			$("#section-5-page-1 abbr").animate({opacity:1,  top: 0}, 300, function() {
				runSecondPage();
			});
		}

		function runSecondPage() {
			$("#section-5-page-2 abbr").animate({opacity:1,  top: 0}, 300, function() {
				runThirdPage();
				runItAll();
			});
		}

		function runThirdPage() {
			$("#section-5-page-3 abbr").animate({opacity:1,  top: 0}, 300, function() {

			});
		}

		function runItAll() {
			$(".page_item_caption .description").animate({opacity:1}, 300);
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
		},

		isPh : function() {

			if ($(window).width() < 750) return true;

			return false;

		}


	}

}





