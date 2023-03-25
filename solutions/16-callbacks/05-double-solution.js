// e.g.
const doubleNumber = (num) => {
  return num * 2;
};

/**
 * The function "doubleArray" times each number in an array be two.
 *
 * Here is what you need to do:
 * - Inside the doubleArray function, create an empty array called "result".
 * - Loop through each number in the "originalArray" array using a for loop.
 * - In the loop, call the callback function with the current number as its argument.
 * This should return the doubled value of the number. Store the doubled value in a
 * variable called doubledNum.
 * - Add doubledNum to the result array.
 * - After the loop, return the result array, which should now contain the doubled numbers.
 *
 * @example
 * const doubleNumber = (num) => num * 2;
 * const result = doubleArray([1, 2, 3], doubleNumber); // [2, 4, 6]
 */

const doubleArray = (originalArray, callback) => {
  const result = [];
  for (let i = 0; i < originalArray.length; i++) {
    const doubledNum = callback(originalArray[i]);
    result.push(doubledNum);
  }
  return result;
};


// Uncomment me to test your answer in Quokka
// doubleArray([1, 2, 3], doubleNumber);

// IGNORE THIS BELOW. It is for the tests.

export { doubleArray };
