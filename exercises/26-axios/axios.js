(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

  const dogBtn = document.querySelector("button");
  const img = document.querySelector("img");
  dogBtn.addEventListener("click", async () => {
    const data = await axios.get("https://dog.ceo/api/breeds/image/random");
    img.src = data.data.message;
  });
})();
