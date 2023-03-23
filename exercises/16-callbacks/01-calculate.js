// e.g.
const add = (num1, num2) => {
  return num1 + num2;
};

// e.g
const subtract = (num1, num2) => {
  return num1 - num2;
};

/**
 * The function "calculate" below with will accept two numbers
 * and a callback function.
 *
 * What you need to do is to return and invoke the callback function
 * inside of "calculate". It should accept the two numbers as parameters.
 *
 * @example
 * const add = (a, b) => {
 *   return a + b;
 * }
 * const subtract = (a, b) => {
 *   return a - b;
 * }
 * console.log( calculate(5, 10, add) ); // 15
 * console.log( calculate(7, 3, subtract) ); // 4
 */

const calculate = (num1, num2, callback) => {
  // WRITE YOUR ANSWER IN HERE
};

// Uncomment me to test in Quokka
// console.log( calculate(5, 10, add) );
// console.log( calculate(7, 3, subtract) );

// IGNORE THIS BELOW. It is for the tests.

export { calculate };
