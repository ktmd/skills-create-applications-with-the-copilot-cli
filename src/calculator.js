#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports the four basic arithmetic operations:
 *   - Addition      (+)
 *   - Subtraction   (-)
 *   - Multiplication (×)
 *   - Division      (÷)
 *
 * Usage: node calculator.js <operation> <num1> <num2>
 * Operations: add, subtract, multiply, divide
 * Example: node calculator.js add 5 3
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number} difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b. Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number} quotient of a divided by b
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , operation, num1, num2] = process.argv;

  if (!operation || num1 === undefined || num2 === undefined) {
    console.error("Usage: node calculator.js <operation> <num1> <num2>");
    console.error("Operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: num1 and num2 must be valid numbers");
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case "add":
        result = add(a, b);
        break;
      case "subtract":
        result = subtract(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      case "divide":
        result = divide(a, b);
        break;
      default:
        console.error(`Unknown operation: "${operation}"`);
        console.error("Supported operations: add, subtract, multiply, divide");
        process.exit(1);
    }
    console.log(`${a} ${operation} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
