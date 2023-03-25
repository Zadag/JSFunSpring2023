// e.g.
const format = (string1, string2) => {
  return `- ${string1}
- ${string2}`;
};

/**
 * The function "formatString" below with will accept two strings
 * and a callback function.
 *
 * What you need to do is to return and invoke the callback function
 * inside of "formatString". It should accept the two strings as parameters.
 *
 * @example
 * console.log( formatString("Wash dishes", "Do laundry", format) );
 * // - Wash Dishes
 * // - Do laundry
 */

const formatString = (string1, string2, callback) => {
  return callback(string1, string2);
};

// Uncomment me to test in Quokka
// console.log( formatString("Wash dishes", "Do laundry", format) );

// IGNORE THIS BELOW. It is for the tests.

export { formatString };
