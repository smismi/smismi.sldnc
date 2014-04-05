//define namespace
var SL = {

	controller: null,
	init: function() {
		console.log("1. init");


//		SL.cropViewport();
//		SL.preloadImage();


//		SL.initScrollMagik();
//
//
//		SL.initParallax1();
//		SL.initParallax2();
//		SL.initParallax3();
//		SL.initParallax4();
//		SL.initParallax5();



		SL.initInterActive5();



	},

	preloadImage: function() {
		console.log("3. preloadImage   ---    start");



		SL.QueryLoader = QueryLoader;

//		QueryLoader.init(function(){ SL.runScene1() });
		SL.QueryLoader.init(function(){ SL.runCupAnimation() });


	},
	runCupAnimation: function() {
		SL.cup = $("<div id='cup'></div>").appendTo($("body"));


		var i = 0; // Declare a global variable to hold the current iteration value.
		function changeClass(){

				if (i == 25) {

					clearInterval(timerId);
					SL.cup.fadeOut(1000, function(){
						$(this).remove();
					})
					SL.unCropViewport();




					console.log("4. preloadImage   ---    done");
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



		$("#content-wrapper").css({opacity: 0});
//		$("body").css({overflow: "hidden"});

		$(".header").css({top: -300, opacity: 0});
		$(".pager").css({right: -300, opacity: 0});





	},
	unCropViewport: function() {


		$("#content-wrapper").animate({opacity: 1}, 1000, function() {

			SL.runScene1();


//			$("body").css({overflow: "auto"});

			$(".header").animate({top: 0, opacity: 1}, 1200);
			$(".pager").animate({right: 0, opacity: 1}, 1200);

			console.log("5. unCropViewport   ---    done");

		})





	},

	runScene1: function() {

		console.log("6. runScene1   ---    run");



		TweenMax.set("#section-1 .section-1-bg-2", {x: "-100%", opacity: 0});
		TweenMax.set("#section-1 .section-1-bg-4", {x: "200%", opacity: 0});


//		TweenMax.set("#section-1 .section-1-bg-3", {scale: 0, opacity: 0});

		// build tween
		var tween1 = new TimelineMax()
			.add(
				TweenMax.to("#section-1 .section-1-bg-2", 1, {x: 0, opacity: 1,
					onStart: function () {console.log("#section-1 .section-1-bg-2 -- start")},
				})
			);
		var tween2 = new TimelineMax()
			.add(
				TweenMax.to("#section-1 .section-1-bg-4", 1, {x: "100%", opacity: 1,
					onStart: function () {console.log("#section-1 .section-1-bg-2 -- start")},
				})
			);


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
			.triggerHook("onLeave")
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-1 .wrapper", 1, {y:0}, {y:200}),
			]));
	},
	initParallax2: function() {
		console.log("?. initParallax2   ---    init");

		// parallax2
		new ScrollScene({
			triggerElement: "#section-2",
			duration: 1000,
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook("onLeave")
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-2 .wrapper", 1, {y:0}, {y:200}),
			]));
	},
	initParallax3: function() {
		console.log("?. initParallax3   ---    init");


		// parallax3
		new ScrollScene({
			triggerElement: "#section-3",
			duration: 1000,
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook("onLeave")
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-3 .wrapper", 1, {y:0}, {y:200}),


			]));
	},
	initParallax4: function() {
		console.log("?. initParallax4   ---    init");


		// parallax4
		new ScrollScene({
			triggerElement: "#section-4",
			duration: 1000,
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook("onLeave")
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-4 .wrapper", 1, {y: 0}, {y: 200}),


			]));




		new ScrollScene({
			triggerElement: "#section-4",
			duration: 1000*2,
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook("onEnter")
			.setTween(new TimelineMax().add([
//				TweenMax.fromTo("#section-4 .section-4-bg-1", 1, { backgroundPosition: "0% 0%"}, {backgroundPosition: "0% 132%", ease: Linear.easeNone}),
//				TweenMax.fromTo("#section-4 .section-4-bg-2", 1, { backgroundPosition: "0% 0%"}, {backgroundPosition: "0% 180%", ease: Linear.easeNone}),
//				TweenMax.fromTo("#section-4 .section-4-bg-3", 1, { backgroundPosition: "0% 100%"}, {backgroundPosition: "0% 182%", ease: Linear.easeNone}),
//				TweenMax.fromTo("#section-4 .section-4-bg-4", 1, { backgroundPosition: "0% 0%"}, {backgroundPosition: "0% 229%", ease: Linear.easeNone})

//						TweenMax.fromTo("#section-4 .section-4-bg-3", 1, { backgroundPosition: "50% 50%"}, {backgroundPosition: "-40% 0",  ease: Linear.easeNone}),
//						TweenMax.fromTo("#section-4 .section-4-bg-1", 1, {y: 0}, {x: 1122,  rotation: 113, ease: Linear.easeNone}),
//						TweenMax.fromTo("#section-4 .section-4-bg-2", 1, {y: 0}, {y: 200	, left: -22,  rotation: -13,  ease: Linear.easeNone}),
//						TweenMax.fromTo("#section-4 .section-4-bg-25", 1, {y: 0}, {y: 400, left: -22,  rotation: 13, ease: Linear.easeNone}),
//						TweenMax.fromTo("#section-4 .section-4-bg-3", 1, {y: 0}, {y: 500, ease: Linear.easeNone}),
//						TweenMax.fromTo("#section-4 .section-4-bg-4", 1, {y: 0}, {y: 700, ease: Linear.easeNone})

			]));
	},
	initParallax5: function() {
		// parallax5
		console.log("?. initParallax5   ---    init");


		new ScrollScene({
			triggerElement: "#section-5",
			duration: 1000,
			offset: 0
		})
			.addTo(SL.controller)
			.triggerHook("onLeave")
			.setTween(new TimelineMax().add([
				TweenMax.fromTo("#section-5 .wrapper", 1, {y:0}, {y:200}),


			]));
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



//
//		$("#section-5-page-1 img").animate({opacity:1,  top: 0}, 300, 'linear');
//
//			$("#section-5-page-2 img").animate({opacity:1,  top: 0}, 300, 'linear');
//
//
//			$("#section-5-page-3 img").animate({opacity:1,  top: 0}, 300, 'linear');
//
//			$(".page_item_caption .description").animate({opacity:1}, 300, 'linear', bindMouse );



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


		function runHesitate() {

			console.log("all runHesitate");

			return;

		}


//		$("#section-5-page-1").mouseParallax();
//		$("#section-5-page-2").mouseParallax();
//		$("#section-5-page-3").mouseParallax();



	}




}





