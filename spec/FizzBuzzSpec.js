describe("FizzBuzz", function() {

  var fizzbuzz;

  describe("Returns fizz", function() {

    it('when the number is 3', function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizz(3)).toBe("Fizz");
    });

  });

  describe("Returns buzz", function() {

    it("when the number is 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.buzz(5)).toBe("Buzz");
    });

  });

  describe("Returns FizzBuzz", function() {

    it("when the number is 15", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.fizzbuzz(15)).toBe("FizzBuzz");
    });

  });

});