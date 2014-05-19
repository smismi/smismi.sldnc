//define namespace
var SL = {

	controller: null,
	pager: null,
	globals: {
		cupDelay: 1000,
		lite: false


	},
	init: {

		main: function() {
			SL.init.cache();


			$(".section-1-bg-2").animate({left: "10%", opacity: 1}, 800, "easeOutCirc");
			$(".section-1-bg-3").animate({right: "10%", opacity: 1, marginRight: "-150px"}, 800, "easeOutCirc", function(){

					$(".section-1-bg-25").animate({opacity:1}, 1000);

					$(".header").animate({top: 0, opacity: 1}, 600);
					$(".pager").animate({right: 0, opacity: 1}, 600 , function(){


						SL.initScrollMagik();

						SL.initPager();
//						SL.initScrollTop();
//					SL.preventScroll.unprevent();


						SL.initParallax1();
						SL.initParallax2();
						SL.initParallax3();
						SL.initParallax4();
						SL.initParallax5();

					});
				});






		},

		catalog: function() {
			SL.init.cache();



			SL.initHeaderMenu();
			SL.initPager();
			SL.initScrollTop();







		},


		cache: function(){


//		cache blocks
			SL.pager = $("#pager_nav");
			SL.mainmenu = $("#header");
			SL.header = $(".header");
			SL.mobilemenu = $("#mobilemenu");
			SL.contentWrapper = $('#content-wrapper');
			SL.scrollTop = $('#back_to_top');

		}

	},

	initScrollMagik: function() {




		SL.controller = new ScrollMagic()







	},


	initParallax1: function() {


		if(Modernizr.touch) {




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




		} else {


			if (SL.globals.lite) return;

			var tween = new TimelineMax ()
				.add([
//					TweenMax.fromTo("#section-1 .wrapper",1, {y: -500}, {y: 500, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-1 .section-1-bg-11",1, {y: 40}, {y: -40, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-1 .section-1-bg-12",1, {y: 60}, {y: -60, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-1 .section-1-bg-25",1, {y: -130}, {y: 130, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-1 .section-1-bg-2",1, {y: 140}, {y: -140, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-1 .section-1-bg-3",1, {y: 140}, {y: -140, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-1 .section-1-bg-4",1, {y: 100}, {y: -100, ease: Linear.easeNone})
				]);

			var scene = new ScrollScene({triggerElement: "#section-1", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller).on("enter", function (event) {
//					console.log("1st enter")
				})
				.on("leave", function (event) {
//					console.log("1st leave")
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


//		$(window).resize(function() {
//
//			SL.controller.updateScene(scene, true);
//
//		});


	},

	getWH: function () {
		console.log(1);
		return $(window).height();
	},
	initParallax2: function() {

		if(Modernizr.touch && !SL.func.isPh()) {





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



		} else {


			if (SL.globals.lite) return;




			var tween = new TimelineMax ()
				.add([
//					TweenMax.fromTo("#section-2 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-2 .page_item_ic",1, {y: -100}, {y: 100, ease: Linear.easeNone})
				]);

			var scene = new ScrollScene({triggerElement: "#section-2", duration: SL.getWH() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller).on("enter", function (event) {
//					console.log("2st enter")
				})
				.on("leave", function (event) {
//					console.log("2st leave")
				});




			var scene = new ScrollScene({triggerElement: "#section-2", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(2);
				});



			var scene = new ScrollScene({
					triggerElement: "#section-2",
					duration: $(window).height(),
					offset: -200
				})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(2);
				});


//			$(window).resize(function() {
//
//				SL.controller.updateScene(scene, true);
//				SL.controller.updateScene(scene2, true);
//				SL.controller.updateScene(scene3, true);
//
//			});


		};





	},
	initParallax3: function() {

		if(Modernizr.touch && !SL.func.isPh()) {

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


		} else {


			if (SL.globals.lite) return;




			var tween = new TimelineMax ()
				.add([
//					TweenMax.fromTo("#section-3 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-3 .section-big-title",1, {y: -150}, {y: 50, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-3 .section-3-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),



									TweenMax.to("#section-3 .section-3-item-4-1", 1, {rotation:  45,  scale: 1.5, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
									TweenMax.to("#section-3 .section-3-item-4-5", 1, {rotation:  55,  scale:.4, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-4-6", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-3 .section-3-item-3", 1, {top: "75%"}, {top: "10%", ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-1", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
//									TweenMax.to("#section-3 .section-3-item-3-2", 1, {rotation:  -35,  scale: 1, ease: Linear.easeNone}),
									TweenMax.to("#section-3 .section-3-item-3-3", 1, {rotation:  90,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-4", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-3-5", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
									TweenMax.to("#section-3 .section-3-item-3-6", 1, {rotation:  24,  scale: 1, ease: Linear.easeNone}),
									TweenMax.to("#section-3 .section-3-item-3-7", 1, {rotation:  -44,  scale: 1, ease: Linear.easeNone}),


//					TweenMax.fromTo("#section-3 .section-3-item-1", 1, {top: "55%"}, {top: "35%", ease: Linear.easeNone}),
//									TweenMax.to("#section-3 .section-3-item-1-1", 1, {rotation:  60,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-1-2", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					//				TweenMax.to("#section-3 .section-3-item-1-3", 1, {rotation:  0,  scale: 1, ease: Linear.easeNone}),
					]);



			var scene = new ScrollScene({triggerElement: "#section-3", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller);

			var scene2 = new ScrollScene({triggerElement: "#section-3", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(3);
				});



			var scene3 = new ScrollScene({
				triggerElement: "#section-3",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(3);
				});




//			$(window).resize(function() {
//
//				SL.controller.updateScene(scene, true);
//				SL.controller.updateScene(scene2, true);
//				SL.controller.updateScene(scene3, true);

//			});


		}

	},
	initParallax4: function() {

		if(Modernizr.touch && !SL.func.isPh()) {

			new ScrollScene({triggerElement: "#section-4", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(4);
//					SL.destrotInterActive5();
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

		} else {


			if (SL.globals.lite) return;


			var tween = new TimelineMax ()
				.add([


					TweenMax.fromTo("#section-4 .wrapper", 1, { backgroundPosition: "50% -500px"}, {backgroundPosition: "50% 500px", ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-4 .section-big-title",1, {y: 0}, {y: 550, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-4 .section-4-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),
//					TweenMax.to("#section-4 div.wrapper", 1, {backgroundPosition: "0 130px", repeat: -1, delay: 1, repeatDelay: 2, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4  .section-4-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),

				TweenMax.to("#section-4 .section-4-item-4-1", 1, {rotation:  24, x:-400,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-4-2", 1, {rotation:  90, x:-400, scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-4-3", 1, {rotation:  80, x:-400, scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-4-4", 1, {rotation:  34, x:-400, scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-4-5", 1, {rotation:  55,x:-400,  scale: .6, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-4-6", 1, {rotation:  24,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-4-7", 1, {rotation:  299,x:-400,  scale: 1, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4 .section-4-item-3", 1, {top: "75%"}, {top: "10%", ease: Linear.easeNone}),

				TweenMax.to("#section-4 .section-4-item-3-1", 1, {x:-400, rotation:  90,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-2", 1, {x:-400, rotation:  -50,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-3", 1, {x:-400, rotation:  55,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-4", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-5", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-6", 1, {x:-400, rotation:  -90,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-7", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-8", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-3-9", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4 .section-4-item-1", 1, {top: "55%"}, {top: "35%", ease: Linear.easeNone}),

				TweenMax.to("#section-4 .section-4-item-1-1", 1, {x:-400,rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-1-2", 1, {x:-400,rotation:  89,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-4 .section-4-item-1-3", 1, {x:-400,rotation:  0,  scale: 1, ease: Linear.easeNone}),
				]);


			var scene = new ScrollScene({triggerElement: "#section-4", duration: $(window).height() * 2})
				.setTween(tween)
				.triggerHook(1)
				.addTo(SL.controller);

			var scene2 = new ScrollScene({triggerElement: "#section-4", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(4);
//					SL.destrotInterActive5();
				});


			var tween2 = new TimelineMax ()
				.add([
//					TweenMax.fromTo("#section-4 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-4 .section-big-title",1, {y: -100}, {y: 100, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-4 .section-4-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),
//					TweenMax.to("#section-4 div.wrapper", 1, {backgroundPosition: "0 130px", repeat: -1, delay: 1, repeatDelay: 2, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4  .section-4-item-4", 1, {top: "160%"}, {top: "-60%", ease: Linear.easeNone}),

				TweenMax.to("#section-42 .section-4-item-4-1", 1, {rotation:  24, x:-400,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-4-2", 1, {rotation:  90, x:-400, scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-4-3", 1, {rotation:  80, x:-400, scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-4-4", 1, {rotation:  34, x:-400, scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-4-5", 1, {rotation:  55,x:-400,  scale: .6, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-4-6", 1, {rotation:  24,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-4-7", 1, {rotation:  299,x:-400,  scale: 1, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4 .section-4-item-3", 1, {top: "75%"}, {top: "10%", ease: Linear.easeNone}),

				TweenMax.to("#section-42 .section-4-item-3-1", 1, {x:-400, rotation:  90,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-2", 1, {x:-400, rotation:  -50,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-3", 1, {x:-400, rotation:  55,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-4", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-5", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-6", 1, {x:-400, rotation:  -90,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-7", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-8", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-3-9", 1, {x:-400, rotation:  0,  scale: 1, ease: Linear.easeNone}),

//					TweenMax.fromTo("#section-4 .section-4-item-1", 1, {top: "55%"}, {top: "35%", ease: Linear.easeNone}),

				TweenMax.to("#section-42 .section-4-item-1-1", 1, {x:-400,rotation:  0,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-1-2", 1, {x:-400,rotation:  89,  scale: 1, ease: Linear.easeNone}),
				TweenMax.to("#section-42 .section-4-item-1-3", 1, {x:-400,rotation:  0,  scale: 1, ease: Linear.easeNone}),
				]);


			var scene2 = new ScrollScene({triggerElement: "#section-42", duration: $(window).height() * 2})
				.setTween(tween2)
				.triggerHook(1)
				.addTo(SL.controller);

			var scene22 = new ScrollScene({triggerElement: "#section-42", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(4);
//					SL.destrotInterActive5();
				});


			var scene3 = new ScrollScene({
				triggerElement: "#section-4",
				duration: $(window).height(),
				offset: -200
			})
				.addTo(SL.controller)
				.triggerHook(0.5)
				.on("enter", function (event) {
					SL.setPager(4);
//					SL.destrotInterActive5();
				});



//			$(window).resize(function() {
//
//				SL.controller.updateScene(scene, true);
//				SL.controller.updateScene(scene2, true);
//				SL.controller.updateScene(scene3, true);
//
//			});


		}


	},
	initParallax5: function() {
		// parallax5

		if (!SL.globals.lite) SL.destrotInterActive5();




		if(Modernizr.touch && !SL.func.isPh()) {



			new ScrollScene({triggerElement: "#section-5", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(5);
					SL.initInterActive5();
				});


		} else {

			if (SL.globals.lite) return;


//			var tween = new TimelineMax ()
//				.add([
//					TweenMax.fromTo("#section-5 .wrapper",1, {y: -200}, {y: 200, ease: Linear.easeNone}),
//					TweenMax.fromTo("#section-5 .section-big-title",1, {marginTop: -100}, {marginTop: 100, ease: Linear.easeNone})
//				]);
//
//			new ScrollScene({triggerElement: "#section-5", duration: $(window).height() * 2})
//				.setTween(tween)
//				.triggerHook(1)
//				.addTo(SL.controller);

			new ScrollScene({triggerElement: "#section-5", duration: 0})
				.triggerHook(.5)
				.addTo(SL.controller).on("enter", function (event) {
					SL.setPager(5);
					SL.initInterActive5();
				});



		}


	},

	destrotInterActive5 : function() {
		$(".page_item_caption", "#section-5").css({opacity:0, marginTop: -70});
		$(".page_item_caption .description").css({opacity:0 });
		$(".section-5-header, #section-5 .headermark, .catalog_enter5").css({opacity:0});

	},
	initInterActive5: function() {
		// interactive5

		setTimeout(runFirstPage, 300);


		function runFirstPage() {
			$("#section-5-page-1").animate({opacity:1,  marginTop: 0}, 300, function() {
				runSecondPage();
			});
		}

		function runSecondPage() {
			$("#section-5-page-2").animate({opacity:1,  marginTop: 0}, 300, function() {
				runThirdPage();
			});
		}

		function runThirdPage() {
			$("#section-5-page-3").animate({opacity:1,  marginTop: 0}, 300, function() {
				runItAll();
			});
		}

		function runItAll() {
			$(".page_item_caption .description").animate({opacity:1}, 1300);

			$(".section-5-header, #section-5 .headermark, .catalog_enter5").animate({opacity:1}, 1300);

		}






	},
	setPager: function(index) {

		var _i = index - 1;
		$(SL.pager).attr("class", "").addClass("active_" + index);
		$("ul li", SL.pager).removeClass("active");
		$("ul li:eq(" + _i + ")", SL.pager).addClass("active");


		if (index === 1) {
			SL.scrollTop.css({bottom: -60});
		} else {
			SL.scrollTop.css({bottom: 0});
		}


	},
	initPager: function() {

		$("li", SL.pager).on("click", function(){

			var _target = $(this).data("target");


			$('html, body').animate({
				scrollTop: $("#section-" + _target).offset().top
			}, 1000, function(){
				SL.setPager(_target);
			});

		})

		$(".page_item", "#section-2").on("click", function(){

			var _target = $(this).data("target");
//			$("body").scrollTo( "#section-" + _target , 1220 , function(){
//
//			});

			$('html, body').animate({
				scrollTop: $("#section-" + _target).offset().top
			}, 1000, function(){
				SL.setPager(_target);
			});
			return false;


		})




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





