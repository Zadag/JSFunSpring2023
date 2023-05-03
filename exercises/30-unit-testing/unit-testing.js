/**
 * STOP! You will not modify the code that is in the file.
 * Instead, you will be writing the unit tests for this exercise
 * inside `unit-testing.spec.js`
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} sum of two numbers
 */
const add = (num1, num2) => num1 + num2;

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} difference of two numbers
 */
const subtract = (num1, num2) => num1 - num2;

/**
 * @param {number} num
 * @returns {boolean} whether or not a number is even
 */
const isEvenNumber = (num) => num % 2 === 0;

/**
 * Loops through a multidimensional array of object literals
 * and returns a new array where only the adults are included
 *
 * @example
 * findAdults([{ name: "Aiden", age: 10 }, { name: "Janet", age: 43 }])
 *  // [{ name: "Janet", age: 43 }]
 *
 * @param {array} people a multidimensional array containing objects
 * where each object represents a person
 * and each object has the property age
 * @returns {array} the object literals in the array where the age is
 * greater than or equal to 18
 */
const findAdults = (people) => {
  return people.filter((person) => {
    return person.age >= 18;
  });
};

/**
 * I need to export so that `exercises/27-unit-testing/unit-testing.spec.js`
 * can access the functions above.
 */
export { add, subtract, isEvenNumber, findAdults };
