var FizzBuzz = function() {};


  FizzBuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisible(number, 3);
  };

  FizzBuzz.prototype.isDivisibleByFive = function(number) {
    return this._isDivisible(number, 5);
  };

  FizzBuzz.prototype._isDivisible = function(number, divisor) {
    return (number % divisor === 0);
  };


