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
		SL.mobilemenu = $("#mobilemenu");
		SL.contentWrapper = $('#content-wrapper');
		SL.scrollTop = $('#back_to_top');





//		if(!Modernizr.touch) {
			SL.cropViewport()
				.test()
//			SL.unCropViewport();
				.preloadImage(SL.unCropViewport);
//		} else {
//			SL.unCropViewport();
//		}





		SL.initHeaderMenu();







	},

	cropViewport: function(callback) {

		console.log("2. cropViewport   ---    init");



		$(".header").css({top: -300, opacity: 0});
		$(".pager").css({right: -300, opacity: 0});


		SL.contentWrapper =  $('#content-wrapper');
//		SL.contentWrapper.css('opacity', 0);

//		$(window).load(function() {
////			SL.contentWrapper.animate({'opacity': 1}, 800);
//
//		});


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


		SL.cup = $("<div id='cup'></div>").addClass("cup_00").appendTo($("#section-1 .wrapper"));


		var i = 0; // current iteration value.

		function changeClass(){


				if (i == 1) {
//					SL.unCropViewport();




					SL.overlay.animate({opacity: 0}, 200, function(){
						SL.pagePreloader.fadeOut(100, function(){
							$(this).remove();
						}).remove();
						$(this).remove();

					});




				}

				if (i == 30) {

					clearInterval(timerId);

					$(".section-1-bg-4").show();
// 					SL.cup.fadeOut(1000, function(){

					SL.cup.remove();
//					})



					console.log("4. preloadImage   ---    done");

					SL.runScene1();

					return;
				}

				var _i = (i<10)?"0"+i:i;

				SL.cup.removeClass().addClass("cup_" + _i);

				i++;



		}
		var timerId = setInterval(changeClass, 1000);




	},
	runScrollAnimation: function() {
		return;

		SL.scroll = $("#scroll_me").addClass("scroll_00");


		var i = 0; // current iteration value.

		function changeClass(){


			if (i > 20) {

				 i = 0;
			}

			var _i = (i<10)?"0"+i:i;

			SL.scroll.removeClass().addClass("scroll_" + _i);

			i++;



		}
		var timerId = setInterval(changeClass, 30);




	},
	unCropViewport: function() {




		console.log("5. unCropViewport   ---    satart");

		$(window).scrollTop(0);


		SL.runCupAnimation();


//		$("#content-wrapper").animate({opacity: 1, overflow: "auto"}, 1000, function() {


			console.log("5. unCropViewport   ---    done");

//		})


	},

	runScene1: function() {



			console.log("6. runScene1   ---    run");




			$(".section-1-bg-2").animate({left: "10%", opacity: 1}, 800, "easeOutCirc");
			$(".section-1-bg-3").animate({right: "10%", opacity: 1, marginRight: "-150px"}, 800, "easeOutCirc", function(){

				$(".section-1-bg-25").animate({opacity:1}, 1000);


				$(".header").animate({top: 0, opacity: 1}, 600);
				$(".pager").animate({right: 0, opacity: 1}, 600 , function(){


			});

			SL.initScrollMagik();

			SL.initPager();
			SL.initScrollTop();


			SL.initParallax1();
			SL.initParallax2();
			SL.initParallax3();
			SL.initParallax4();
			SL.initParallax5();



		});





//		SL.initInterActive5();


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
			offset: -200
		})
			.addTo(SL.controller)
			.triggerHook(0.5)
			.on("enter", function (event) {
				SL.setPager(1);
			})
		;

	},
	initParallax2: function() {


		console.log("?. initParallax2   ---    init");

		// parallax2

		if(Modernizr.touch) {

			new ScrollScene({
				triggerElement: "#section-2",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(2);
				})
			;

		} else {

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

		};





	},
	initParallax3: function() {
		console.log("?. initParallax3   ---    init");

//		parallax3

		if(Modernizr.touch) {


			new ScrollScene({
				triggerElement: "#section-3",
				duration: $(window).height(),
				offset: 0
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(3);
				})
			;

		} else {


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

			new ScrollScene({
				triggerElement: "#section-3",
				duration: $(window).height()*2,
				offset: 0
			})
				.addTo(SL.controller)
				.triggerHook("onEnter")
				.setTween(new TimelineMax().add([

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
	//				TweenMax.to("#section-3 .section-3-item-3-3", 1, {rotation:  90,  scale: 1, ease: Linear.easeNone}),
	//				TweenMax.to("#section-3 .section-3-item-3-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
	//				TweenMax.to("#section-3 .section-3-item-3-5", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
	//				TweenMax.to("#section-3 .section-3-item-3-6", 1, {rotation:  -34,  scale: 1, ease: Linear.easeNone}),


					TweenMax.fromTo("#section-3 .section-3-item-1", 1, {top: "55%"}, {top: "35%", ease: Linear.easeNone}),
	//				TweenMax.to("#section-3 .section-3-item-1-1", 1, {rotation:  60,  scale: 1, ease: Linear.easeNone}),
	//				TweenMax.to("#section-3 .section-3-item-1-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
	//				TweenMax.to("#section-3 .section-3-item-1-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),

				]));

		}

	},
	initParallax4: function() {
		console.log("?. initParallax4   ---    init");

		// parallax4



		if(Modernizr.touch) {



			new ScrollScene({
				triggerElement: "#section-4",
				duration: $(window).height(),
				offset: 0
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(4);
					SL.destrotInterActive5();
				})
			;


		} else {

			new ScrollScene({
				triggerElement: "#section-4",
				duration: $(window).height(),
				offset: 0
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.setTween(new TimelineMax().add([
					TweenMax.fromTo("#section-3 .wrapper", 1, {y:0}, {y:200}),
				]))
				.on("enter", function (event) {
					SL.setPager(4);
					SL.destrotInterActive5();
				})
			;

			new ScrollScene({
				triggerElement: "#section-4",
				duration: $(window).height()*2,
				offset: 0
			})
				.addTo(SL.controller)
				.triggerHook("onEnter")
				.setTween(new TimelineMax().add([


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
				]));

		}


	},
	initParallax5: function() {
		// parallax5
		console.log("?. initParallax5   ---    init");

		// parallax5

		if(Modernizr.touch) {

			new ScrollScene({
				triggerElement: "#section-5",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0)
				.on("enter", function (event) {
					SL.setPager(5);
					SL.initInterActive5();
				})
			;

		} else {

			new ScrollScene({
				triggerElement: "#section-5",
				duration: $(window).height(),
				offset: 0
			})
				.addTo(SL.controller)
				.triggerHook(.5)
				.setTween(new TimelineMax().add([
					TweenMax.fromTo("#section-4 .wrapper", 1, {y:0}, {y:200}),
				]))
			;
			new ScrollScene({
				triggerElement: "#section-5",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0)
				.on("enter", function (event) {
					SL.setPager(5);
					SL.initInterActive5();
				})
			;
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

		$(".item_menu", SL.mainmenu).on('click', function(){

			if (SL.mainmenu.hasClass("menu_visible")) {

				SL.mainmenu.removeClass("menu_visible");

				$("#mobilemenu").animate({"left": "-100%"}, 100);

//				todo скрывать подменю при звкрытии
			} else {

				SL.mainmenu.addClass("menu_visible");

				$("#mobilemenu").animate({"left": "0%"}, 100);
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
//		$(".item_link", SL.mainmenu).on({'mouseenter': function () {
//
//
//				var _sub =  $("a", this).data("target");
//
//				$(".subnav-" + _sub).show();
//
//
//			}, 'mouseleave': function () {
//
//
//				var _sub =  $("a", this).data("target");
//
//				$(".subnav-" + _sub).hide();
//
//			}}
//		);


	},
	destrotInterActive5 : function() {

		$(".page_item_caption abbr").css({opacity:0, top: -46});
		$(".page_item_caption .description").css({opacity:0, });
//		$(".page_item_caption i, .page_item_caption em, .page_item_caption .description").css({opacity:0});

	},
	initInterActive5: function() {
		// interactive5
		console.log("?. interactive5   ---    init")
//		$(".page_item_caption i, .page_item_caption em, .page_item_caption .description").css({opacity:1});


		setTimeout(runFirstPage, 300);
//
//
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
		}
	}

}





