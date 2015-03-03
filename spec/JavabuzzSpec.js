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

    it('divisible by fifteen', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

   it('divisible by three', function(){
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
   });

   it('divisible by five', function() {
    expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
   });

   it('divisible by fifteen', function() {
    expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
   });

  });


  describe('know to say', function() {

    it('fizz when divisible by three', function() {
      expect(fizzbuzz.sayFizz(3)).toBe('fizz');
    });

    it('buzz when divisible by five', function() {
      expect(fizzbuzz.sayBuzz(5)).toBe('buzz');
    });

    it('fizzbuzz when divisible by fifteen', function(){
      expect(fizzbuzz.sayFizzBuzz(15)).toBe('fizzbuzz');
    });

  });


});






















