var CrispinCarousel = function(element) {
	this.$element = element;
	this.slides = this.getSlides();
	this.currentSlide = this.getCurrentSlide();
}

CrispinCarousel.prototype.getSlides = function(){
	var imgs = $(this.$element).find('img');
	var slides = [];
	imgs.each(function(index){
		if (index < 4){
			slides.push($(this).attr('src'));
		}
	});
	return slides;
}

CrispinCarousel.prototype.getCurrentSlide = function(){
	return $(this.$element).find('.active-image');
}

var carousel = new CrispinCarousel('.carousel-thumbnails'); 

