function Slider(container, nav) {
	console.log(nav);
	this.container = container;
	this.nav       = nav.show();
	this.imgs      = this.container.find('img');
	this.imgWidth  = this.imgs[0].width;
	this.current   = 0;
}

Slider.prototype.transition = function(position) {
	
	//make sure to provide a parameter to parse 
	//to allow customization
	this.container.animate ({
		'margin-left': position || -(this.current * this.imgWidth)
	});
};

Slider.prototype.setCurrent = function(direction) {
	var pos = this.current
	,   count = this.imgs.length 
	;

	pos += ~~(direction == "next") || -1;
	this.current = (pos < 0 ) ? count - 1 : pos % count;
};

