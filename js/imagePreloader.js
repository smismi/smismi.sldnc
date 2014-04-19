function preloadImages(images, callback) {
	var counter = 0;
	for (var i = 0; i < images.length; i++) {
		var img  = new Image();
		img.onload = function() {
			counter++;
			if (counter == images.length) {
				callback();
			}
		}
		img.src = images[i];
	}
}

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