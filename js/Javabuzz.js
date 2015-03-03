var FizzBuzz = function() {};


  FizzBuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisible(number, 3);
  };

  FizzBuzz.prototype.isDivisibleByFive = function(number) {
    return this._isDivisible(number, 5);
  };

  FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
    return this._isDivisible(number, 15);
  };

  FizzBuzz.prototype._isDivisible = function(number, divisor) {
    return (number % divisor === 0);
  };

  FizzBuzz.prototype.sayFizz = function(number) {
    if (this.isDivisibleByThree(number)) {
      return 'fizz'
    };
  };

  FizzBuzz.prototype.sayBuzz = function(number) {
    if (this.isDivisibleByFive(number)) {
      return 'buzz'
    };
  };

  FizzBuzz.prototype.sayFizzBuzz = function(number) {
    if(this.isDivisibleByFifteen(number)) {
      return 'fizzbuzz'
    };

  };






















