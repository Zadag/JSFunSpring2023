import axios from "axios";

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} sum of two numbers
 */
const add = (num1, num2) => num1 + num2;

/**
 * @returns {Object}
 */
const createObject = (key, value) => {
  return {
    [key]: value,
  };
};

/**
 * Adds an event listener, so that when a button is clicked, it will:
 * 1. Say "Loading ..."
 * 2. Disable the button
 */
const handleButtonClick = (button) => {
  button.addEventListener("click", () => {
    button.textContent = "Loading ...";
    button.disabled = "disabled";
  });
};

/**
 * This is making an AJAX request to the Ron Swanson API
 * and returns a Ron Swanson quote
 * @see https://github.com/jamesseanwright/ron-swanson-quotes
 *
 * @returns {Object} AJAX response
 * @example
 * {
 *    data: [
 *      "Capitalism: God’s way of determining who is smart and who is poor."
 *    ]
 * }
 */
const getQuoteRequest = async () => {
  const response = await axios.request({
    url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
  });
  return response;
};

/**
 * Gets the quote from an AJAX response
 * @returns {string} a single quote
 */
const getSingleQuote = async () => {
  const response = await getQuoteRequest();
  return response.data[0];
};

/**
 * I need to export so that "unit-tests.spec.js"
 * can access the functions above.
 */
export { add, createObject, handleButtonClick, getSingleQuote };
