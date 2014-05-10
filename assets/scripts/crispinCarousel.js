var CrispinCarousel = function(slideshowElement) {
	this.images = this.slides(slideshowElement);
}

CrispinCarousel.prototype.slides = function(element){
	var imgs = $(element).find('img');
	var slides = [];
	imgs.each(function(index){
		if (index < 4){
			slides.push($(this).attr('src'));
		}
		});
	return slides;
}

var carousel = new CrispinCarousel('.carousel-thumbnail'); 

