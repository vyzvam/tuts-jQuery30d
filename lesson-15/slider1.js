(function($) {

	var slideUL = $('div.slider').css({overflow: 'hidden'}).children('ul'),
	    imgs = slideUL.find('img'),
	    imgWidth = imgs[0].width,
	    imgsLength = imgs.length,
	    current = 1,
	    totalImgWidth = imgsLength * imgWidth
	;


	$('div.slider_nav').show().find('button').on('click', function() {

		var direction = $(this).data('dir')
			, loc = imgWidth;
		;



		(direction == "next") ? ++current : --current ;




		if (current == 0) current = imgsLength;
		else if (current -1 == imgsLength) current = 1;


		loc = (current - 1) * imgWidth;


		transition(slideUL, loc , direction);
	});

	function transition(container, loc, direction) {

		container.animate({'margin-left': "-" + loc});

	}





})(jQuery);