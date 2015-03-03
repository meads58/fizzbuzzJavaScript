describe('FizzBuzz', function() {
  var fizzbuzz

  beforeEach(function() {
    fizzbuzz = new FizzBuzz
  });

  describe('knows when a number is', function() {

    it('divisible by three', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by five', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

   it('divisible by three', function(){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
   });

   it('divisible by five', function() {
    expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
   });

  });


});