var CrispinCarousel = function(element) {
	this.$element = $(element);
	this.getSlides();
	this.getActiveSlide();
}

CrispinCarousel.prototype.getImages = function(){
	var imgs = $(this.$slides).find('img').slice(0, 3);
	var images = [];
	imgs.each(function(index){
		images.push($(this).attr('src'));
	});
	return images;
}

CrispinCarousel.prototype.getActiveSlide = function(){
	var $s = $(this.$element).find('.active-image');
	if ($s.length !== 1) {
		if ($s.length > 1) {
			$($s).removeClass('active-image');
		}
		$(this.$slides).first().addClass('active-image');
	}
	this.$activeSlide = $(this.$element).find('.active-image');
	return this.$activeSlide;
}

CrispinCarousel.prototype.getSlides = function(){
	var slides = $(this.$element).find('li:has(img)').slice(0, 3);
	var images = [];
	slides.each(function(index){
		images.push($(this).find('img').first().attr('src'));
		$(this).data('index-data', index);
	});
	this.images = images;
	this.$slides = slides;
	return slides;
}

CrispinCarousel.prototype.setNewSlide = function($newSlide){
	$(this.$activeSlide).removeClass('active-image');
	$($newSlide).addClass('active-image');
	this.$activeSlide = $newSlide;
	this.updateCarouselView();
}

CrispinCarousel.prototype.updateCarouselView = function(){}

var carousel = new CrispinCarousel('.carousel'); 

