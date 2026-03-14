const { add, subtract, multiply, divide } = require("../calculator");

// Tests for Addition (+)
describe("add", () => {
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));
  test("adds positive numbers", () => expect(add(10, 20)).toBe(30));
  test("adds negative numbers", () => expect(add(-5, -3)).toBe(-8));
  test("adds a negative and a positive", () => expect(add(-4, 9)).toBe(5));
  test("adds zero", () => expect(add(7, 0)).toBe(7));
  test("adds decimals", () => expect(add(1.5, 2.5)).toBe(4));
});

// Tests for Subtraction (-)
describe("subtract", () => {
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));
  test("subtracts positive numbers", () => expect(subtract(20, 5)).toBe(15));
  test("subtracts resulting in negative", () => expect(subtract(3, 8)).toBe(-5));
  test("subtracts negative numbers", () => expect(subtract(-2, -3)).toBe(1));
  test("subtracts zero", () => expect(subtract(9, 0)).toBe(9));
  test("subtracts decimals", () => expect(subtract(5.5, 2.5)).toBe(3));
});

// Tests for Multiplication (×)
describe("multiply", () => {
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));
  test("multiplies positive numbers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));
  test("multiplies negative numbers", () => expect(multiply(-3, -4)).toBe(12));
  test("multiplies a negative and a positive", () => expect(multiply(-3, 4)).toBe(-12));
  test("multiplies decimals", () => expect(multiply(2.5, 4)).toBe(10));
});

// Tests for Division (÷)
describe("divide", () => {
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));
  test("divides positive numbers", () => expect(divide(15, 3)).toBe(5));
  test("divides resulting in a decimal", () => expect(divide(7, 2)).toBe(3.5));
  test("divides negative numbers", () => expect(divide(-12, -4)).toBe(3));
  test("divides a negative by a positive", () => expect(divide(-9, 3)).toBe(-3));
  test("divides zero by a number", () => expect(divide(0, 5)).toBe(0));
  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});
