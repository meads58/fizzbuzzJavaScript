describe('FizzBuzz',function() {

  var fizz;

  beforeEach(function(){
    fizz = new FizzBuzz();
  })

  it('knows that 3 is divisible by three',function() {
    expect(fizz.isDivisibleByThree(3)).toBe(true);
  })

  it('knows that 5 is not divisible by three', function() {
    expect(fizz.isDivisibleByThree(5)).toBe(false);
  })

  it('knows that 5 is divisible by five', function() {
    expect(fizz.isDivisibleByFive(5)).toBe(true)
  })

  it('knows that 6 is not divisible by five', function() {
    expect(fizz.isDivisibleByFive(6)).toBe(false)
  })

  it('knows that 15 is divisible by fifteen', function() {
    expect(fizz.isDivisibleByFifteen(15)).toBe(true)
  })

  it('knows that 17 is not divisible by fifteen', function() {
    expect(fizz.isDivisibleByFifteen(17)).toBe(false)
  })


})