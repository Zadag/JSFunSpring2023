(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * display the following message in the aqua green notification at the top of the screen,
   * where "Premium" is the name of the plan that user selected:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here
  const planBanner = document.querySelector("#plan-banner");
  planBanner.style.color = "aquamarine";

  const planContainer = document.querySelector(".pricing-table");
  // planContainer.addEventListener("click", (e) => {
  //   const planName = e.target.dataset.plan;
  //   if (planName) {
  //     planBanner.textContent = `Thank you for purchasing the ${planName} plan!`;
  //   }
  // });

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const planName = button.dataset.plan;
      planBanner.textContent = `Thank you for purchasing the ${planName} plan!`;
    });
  });
})();
