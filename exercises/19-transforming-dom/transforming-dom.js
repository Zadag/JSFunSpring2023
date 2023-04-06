/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const alertInfo = document.querySelector(".alert-info");
  alertInfo.style.backgroundColor = "seagreen";

  const btn = document.querySelector("button");
  const lastDiv = document.querySelector(".last-div");
  if (btn.classList.contains("btn-primary")) lastDiv.textContent = "\u2713blue";
})();
