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

	}
}





