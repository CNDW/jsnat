jasmine.getFixtures().fixturesPath = 'specs/fixtures/';
beforeEach(function(){
	loadFixtures("carouselFixture.html");
	carousel = new CrispinCarousel('.carousel-thumbnails');
});

describe("CrispinCarousel", function() {
	it("should be a function", function() {
		expect(typeof CrispinCarousel).toBe("function");
	});
});  

describe("carousel object", function(){

	it("should have an array of strings as it's slides property", function(){
		expect(carousel.slides instanceof Array).toBeTruthy();
		expect(typeof carousel.slides[0]).toBe('string');
	});

	it("should have slides", function(){
		expect(carousel.slides.length).toBeGreaterThan(0);
	});

	it("should have no more than 4 slides", function() {
		expect(carousel.slides.length).toBeLessThan(5);
	});

	it("should return a jquery object with the class '.active-image'", function(){
		expect(typeof carousel.currentSlide).toBe('object');
		expect(carousel.currentSlide.hasClass('active-image')).toBeTruthy();
	});
});

describe("Slide Manipulation", function(){

	var firstSlideIndex = 0;
	var newSlideIndex = 0;
	it("should add .active-image to selected slide with the setCurrentSlide", function(){
		expect(firstSlideIndex).not.toEqual(newSlideIndex);
	});
});