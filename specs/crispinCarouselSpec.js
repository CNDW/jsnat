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

	it("should return a jquery object with the class '.active-image'", function(){
		expect(typeof carousel.currentSlide).toBe('object');
		expect(carousel.currentSlide.hasClass('active-image')).toBeTruthy();
	});
});