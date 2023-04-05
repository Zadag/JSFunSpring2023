/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  const firstLi = document.querySelector("li");
  firstLi.style.backgroundColor = "blue";

  const secondLi = document.querySelector("#myId");
  secondLi.style.backgroundColor = "red";

  const warnings = document.querySelectorAll(".bg-warning");
  warnings.forEach((warning) => {
    console.log(warning);
    warning.style.backgroundColor = "purple";
  });

  const targetMe = document.querySelector(".target-me");
  targetMe.addEventListener("click", () => console.log("hi"));

  const socialMedia = document.querySelectorAll(".sm");
  socialMedia.forEach((social) => (social.style.backgroundColor = "green"));

  const row = document.querySelectorAll(".bg-success > div");
  row.forEach((child) => (child.style.color = "red"));
})();
