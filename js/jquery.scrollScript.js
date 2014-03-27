//инициализацичя плагина

var scrollScript = function (options) {


	var defaults = {
		a: null,
		b: null,
		c: null
	};
	var _this = this;
	var triggersArray = [];
	for(key in options){


		/* Создает триггеры для каждого элемента массива */
		if($.inArray(key, triggersArray) == -1){
			triggersArray.push({
				state : false,
				width : 0,
				height: 0
			});
		}



	}

	var settings = $.extend({}, defaults, options);

	this.getWindowTop = function () {

		/* Get window scrolltop */
		offsetTop = $(window).scrollTop();

		return offsetTop;
	};
	this.scrollEvent = function (event, delta) {
		var _this = this;

		for(key in options){

			var offsetTop = _this.getWindowTop();

			/* Проверяет на наличие функции в offset */
			var arrayOffset;

			if(options[key].trigger instanceof Function){
				arrayOffset = options[key].trigger();
			}
			else{
				arrayOffset = options[key].trigger;
			}


			/* Выполняет callback on для каждого элемента при соотвествующем оффсете */
			if(offsetTop > arrayOffset && triggersArray[key].state == true){
				triggersArray[key].state = false;
				if(options[key].on instanceof Function){
					options[key].on();
				}
			}



			/* Выполняет callback off для каждого элемента при соотвествующем оффсете */
			else if(offsetTop < arrayOffset && triggersArray[key].state == false) {
				triggersArray[key].state = true;
				if(options[key].off instanceof Function){
					options[key].off();
				}
			}
		}
	}

	$(window).scroll(function(event){

		var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

		if (!$("body").hasClass("disabled-onepage-scroll"))  {
			_this.scrollEvent(event, delta);
		}
	})






	return this;
}

