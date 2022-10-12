const fizzBuzz = require("../index");

describe("fizBuzz", () => {
  it("should throw an exception if input is not a number", () => {
    expect(() => {
      fizzBuzz("a");
    }).toThrow();
  });

  it("should return a FizzBuzz", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return a Fizz", () => {
    const result = fizzBuzz(9);
    expect(result).toBe("Fizz");
  });

  it("should return a Buzz", () => {
    const result = fizzBuzz(10);
    expect(result).toBe("Buzz");
  });

  it("should return a input", () => {
    const result = fizzBuzz(2);
    expect(result).toBe(2);
  });
});
