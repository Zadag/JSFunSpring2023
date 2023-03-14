let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// const isPalindrome = ((str) => {
//   let isPal = true;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - (i + 1)]) isPal = false;
//   }
//   return isPal;
// })(string);

const isPalindrome = ((str) => {
  const reversed = str.split("").reverse().join("");
  return reversed === str ? true : false;
})(string);
