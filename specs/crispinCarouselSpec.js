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
	it("should set 'index-data=' attribute to each li to corresponding image index in the carousel.images array", function(){});
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

describe("$activeSlide", function(){

	it("should not have more than one active-image", function(){
		expect(carousel.$activeSlide.length).toBeLessThan(2);
	});

	it("should set the first slide to '.active-image' if none are found", function(){
		//dirty the object
		carousel.$activeSlide.removeClass('active-image'); 
		expect(carousel.$element.find('.active-image').length).toBe(0); 
		//run the function that .$activeSlide uses see if it performs as expected
		carousel.getActiveSlide(); 
		expect(carousel.$activeSlide.hasClass('active-image')).toBeTruthy();
	});

	it("should return a jquery object with the class '.active-image'", function(){
		expect(typeof carousel.$activeSlide).toBe('object');
		expect(carousel.$activeSlide.hasClass('active-image')).toBeTruthy();
	});

});

describe("setNewSlide", function(){

	var firstSlideIndex = carousel.$activeSlide;
	var newSlideIndex = 0;
	it("should add .active-image to selected slide", function(){
	});
	it("should remove .active-image to previously active slide", function(){
		
	});
	it("should update the carousel object's $activeSlide property to match the new slide with .active-image", function(){
		
	});
	it("should take an argument for the slide to be set as the $activeSlide in the form of a jquery selected node", function(){
		
	});
});