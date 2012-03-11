(function($) {

	var slideUL = $('div.slider').css({overflow: 'hidden'}).children('ul')
		, imgs = slideUL.find('img')
		, imgWidth = imgs[0].width
		, imgsLength = imgs.length
		, current = 0
	;


	$('div.slider_nav').show().find('button').on('click', function() {

		var direction = $(this).data('dir')
		;



		current += ~~(direction == "next") || -1 ;
		current = (current < 0) ? imgsLength -1: current % imgsLength;


		console.log(current);

		transition(slideUL, current * imgWidth , direction);
	});

	function transition(container, loc, direction) {

		container.animate({'margin-left': -(loc)});

	}





})(jQuery);