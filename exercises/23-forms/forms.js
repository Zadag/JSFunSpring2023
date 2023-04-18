//const { doc } = require("mocha/lib/reporters");

(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here
  const input = document.querySelector(".mystery-text");
  const renderDiv = document.querySelector(".input-text");
  input.addEventListener("input", () => {
    renderDiv.textContent = input.value;
  });
  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here
  const searchBtn = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");
  const searchResult = document.querySelector(".search-result");
  const form = document.querySelector(".form-group");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchResult.textContent = `No results for ${searchInput.value} were found`;
    if (!searchInput.value) searchResult.textContent = "No results were found";
  });
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
  const checkbox = document.querySelector(".form-check-input");
  const checkLabel = document.querySelector(".form-check-label");
  const warning = document.querySelector(".text-danger");
  const success = document.querySelector(".text-success");
  const checkForm = document.querySelector(".check-form");

  success.style.display = "none";

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      warning.style.display = "none";
      checkLabel.classList.remove("is-invalid");
    } else {
      warning.style.display = "inline-block";
      success.style.display = "none";
      checkLabel.classList.add("is-invalid");
    }
  });

  checkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkbox.checked) success.style.display = "inline-block";
  });
})();
