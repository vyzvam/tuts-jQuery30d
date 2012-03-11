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

		if (current == 0) {
			current = imgsLength;
			loc = totalImgWidth - imgWidth;
			direction = "next";
		}
		else if (current -1 == imgsLength) {
			current = 1;
			loc = 0;
		}

		transition(slideUL, loc , direction);
	});

	function transition(container, loc, direction) {
		var unit;  

		if (direction && loc != 0)  {
			unit = (direction == "next") ? "-=" : "+=";
		}

		container.animate(
			{
				//'margin-left': (direction == "next") ? "-=" + imgWidth : "+=" + imgWidth
				'margin-left': unit ? unit + loc : loc
			}
		)

	}





})(jQuery);