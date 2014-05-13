var CrispinCarousel = function(element) {
	this.$element = $(element);
	this.getSlides();
	this.getActiveSlide();
	this.intevalID = null;
	this.startSlideShow();
	var self = this;
	$(element).bind('mouseenter', function(){self.stopSlideShow();});
	$(element).bind('mouseleave', function(){self.startSlideShow();});
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
	this.updateCarouselView();
	return this.$activeSlide;
}

CrispinCarousel.prototype.getSlides = function(){
	var slides = $(this.$element).find('li:has(img)').slice(0, 4);
	var images = [];
	var carousel = this;
	slides.each(function(index){
	  var self = this;
		images.push($(this).find('img').first().attr('src'));
		$(this).data('index-data', index);
		$(this).bind('click', 'img', function(){
			carousel.setNewSlide(self);
		}); 
	});
	this.$view = $(this.$element).find('.carousel-view');
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

CrispinCarousel.prototype.updateCarouselView = function(){
	var i = $(this.$activeSlide).data('index-data');
	var info = $(this.$activeSlide).find('.view-info').clone().removeClass('hidden');
	$(this.$view).find('img').attr("src", this.images[i]);
	$(this.$view).find('.view-info').replaceWith(info);
}

CrispinCarousel.prototype.setNextSlide = function(){
	var i = $(this.$activeSlide).data('index-data');
	if (i < 3){
		i += 1;
	} else {
		i = 0;
	}
	this.setNewSlide(this.$slides[i]);
}

CrispinCarousel.prototype.startSlideShow = function(interval){
	this.interval = typeof interval === 'number' ? interval : 4000;
	this.slideShow = setInterval($.proxy(this.setNextSlide, this), this.interval);
}

CrispinCarousel.prototype.stopSlideShow = function(){
	clearInterval(this.slideShow);
}

var carousel = new CrispinCarousel('.carousel'); 

