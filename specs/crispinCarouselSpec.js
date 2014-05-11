jasmine.getFixtures().fixturesPath = 'specs/fixtures/';
beforeEach(function(){
	loadFixtures("carouselFixture.html");
	carousel = new CrispinCarousel('.carousel');
});

describe("CrispinCarousel", function() {
	it("should be a function", function() {
		expect(typeof CrispinCarousel).toBe("function");
	});
	it("should locate slide li nodes on object init", function(){
		var test = new CrispinCarousel('.carousel');
		expect(typeof test.$slides).toBe('object');
	});
});  

describe("carousel object", function(){

	it("should have an array of strings as it's images property", function(){
		expect(carousel.images instanceof Array).toBeTruthy();
		expect(typeof carousel.images[0]).toBe('string');
	});

	it("should have images", function(){
		expect(carousel.images.length).toBeGreaterThan(0);
	});

	it("should have no more than 4 images", function() {
		expect(carousel.images.length).toBeLessThan(5);
	});

});

describe("getActiveSlide", function(){

	it("should clear '.active-image' from all but the first slide if more than one slide has the class", function(){
		//dirty the object
		carousel.$slides.addClass('active-image');
		expect(carousel.$element.find('.active-image').length).toBeGreaterThan(1);
		//run the function to see if it preforms
		carousel.getActiveSlide();
		expect(carousel.$element.find('.active-image').length).toBe(1);
	});

	it("should set the first slide to '.active-image' if none are found", function(){
		//dirty the object
		carousel.$activeSlide.removeClass('active-image'); 
		expect(carousel.$element.find('.active-image').length).toBe(0); 
		//run the function to see if it preforms as expected
		carousel.getActiveSlide(); 
		expect(carousel.$activeSlide.hasClass('active-image')).toBeTruthy();
	});
});

describe("$activeSlide", function(){

	it("should not have more than one active-image", function(){
		expect(carousel.$activeSlide.length).toBeLessThan(2);
	});

	it("should return a jquery object with the class '.active-image'", function(){
		expect(typeof carousel.$activeSlide).toBe('object');
		expect(carousel.$activeSlide.hasClass('active-image')).toBeTruthy();
	});

});

describe("setNewSlide()", function(){

	it("should add .active-image to selected slide", function(){
		expect($(carousel.$slides[1]).hasClass("active-image")).not.toBeTruthy();
		carousel.setNewSlide(carousel.$slides[1]);
		expect($(carousel.$slides[1]).hasClass("active-image")).toBeTruthy();
	});

	it("should remove .active-image to previously active slide", function(){
		carousel.setNewSlide(carousel.$slides[1]);
		expect($(carousel.$slides[0]).hasClass('active-image')).not.toBeTruthy();
	});

	it("should update the carousel object's $activeSlide property to match the new slide", function(){
		expect($(carousel.$activeSlide).data("index-data")).toBe(0);
		expect($(carousel.$slides[1]).hasClass('active-image')).not.toBeTruthy();
		carousel.setNewSlide(carousel.$slides[1]);
		expect($(carousel.$activeSlide).data("index-data")).toBe(1);
		expect($(carousel.$slides[1]).hasClass('active-image')).toBeTruthy();
	});
});

describe("getSlides()", function(){
	it("should find the first img tag after the parent $element and set it to the $view property", function(){
		expect(typeof carousel.$view).not.toBe('undefined');
	});
	it("should return no more than 4 slide objects in an array", function(){
		expect(carousel.getSlides().length).toBeLessThan(4);
	});
});

describe("updateCarouselView()", function(){
	it("should set the $view image to the $activeSlide image", function(){
		carousel.$activeSlide = carousel.$slides[1];
		expect($(carousel.$view).find('img').attr('src')).toBe(carousel.images[0]);
		carousel.updateCarouselView();
		expect($(carousel.$view).find('img').attr('src')).toBe(carousel.images[1]);
	});
	it("should set the extra info from the hidden thumbnail elements to the info-view", function(){
		carousel.$activeSlide = carousel.$slides[1];
	});
});