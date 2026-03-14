#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports arithmetic operations:
 *   - Addition      (+)
 *   - Subtraction   (-)
 *   - Multiplication (×)
 *   - Division      (÷)
 *   - Modulo        (%)
 *   - Exponentiation (**)
 *   - Square Root   (√)
 *
 * Usage: node calculator.js <operation> <num1> [num2]
 * Operations: add, subtract, multiply, divide, modulo, power, sqrt
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

/**
 * Returns the modulo (remainder) of a divided by b.
 * Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number} remainder of a divided by b
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

/**
 * Raises base to the given exponent (exponentiation / power).
 * @param {number} base
 * @param {number} exp
 * @returns {number} base raised to the power of exp
 */
function power(base, exp) {
  return Math.pow(base, exp);
}

/**
 * Computes the square root of n.
 * Throws an error if n is negative.
 * @param {number} n
 * @returns {number} square root of n
 */
function sqrt(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };

// CLI entry point
if (require.main === module) {
  const [, , operation, num1, num2] = process.argv;

  if (!operation || num1 === undefined) {
    console.error("Usage: node calculator.js <operation> <num1> [num2]");
    console.error("Operations: add, subtract, multiply, divide, modulo, power, sqrt");
    process.exit(1);
  }

  const a = parseFloat(num1);
  const b = num2 !== undefined ? parseFloat(num2) : undefined;

  const unaryOps = ["sqrt"];
  const needsSecondArg = !unaryOps.includes(operation) && b === undefined;
  if (needsSecondArg) {
    console.error(`Usage: node calculator.js ${operation} <num1> <num2>`);
    process.exit(1);
  }

  if (isNaN(a) || (b !== undefined && isNaN(b))) {
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
      case "modulo":
        result = modulo(a, b);
        break;
      case "power":
        result = power(a, b);
        break;
      case "sqrt":
        result = sqrt(a);
        break;
      default:
        console.error(`Unknown operation: "${operation}"`);
        console.error("Supported operations: add, subtract, multiply, divide, modulo, power, sqrt");
        process.exit(1);
    }
    if (operation === "sqrt") {
      console.log(`${operation}(${a}) = ${result}`);
    } else {
      console.log(`${a} ${operation} ${b} = ${result}`);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
