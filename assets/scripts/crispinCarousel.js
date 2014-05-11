var CrispinCarousel = function(element) {
	this.$element = $(element);
	this.$slides = this.getSlides();
	this.images = this.getImages();
	this.$activeSlide = this.getActiveSlide();
}

CrispinCarousel.prototype.getImages = function(){
	var imgs = $(this.$slides).find('img');
	var images = [];
	imgs.each(function(index){
		if (index < 4){
			images.push($(this).attr('src'));
		}
	});
	return images;
}

CrispinCarousel.prototype.getActiveSlide = function(){
	if (this.$element.find('.active-image').length < 1) {
		this.$slides.first().addClass('active-image');
	}
	return $(this.$element).find('.active-image');
}

CrispinCarousel.prototype.getSlides = function(){
	return $(this.$element).find('li:has(img)');
}

var carousel = new CrispinCarousel('.carousel'); 

