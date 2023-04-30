(async function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

  try {
    const response = await axios("https://rickandmortyapi.com/api/character");
    const characters = response.data.results;
    console.log(characters);

    const select = document.querySelector("select");

    characters.forEach((character) => {
      const option = document.createElement("option");
      option.text = character.name;
      option.value = character.id;
      select.add(option);
    });

    select.addEventListener("change", async () => {
      const img = document.querySelector("img");
      const character = await axios(
        `https://rickandmortyapi.com/api/character/${select.value.toString()}`
      );

      img.src = character.data.image;

      const h1 = document.querySelector("h1");
      h1.textContent = character.data.name;
    });
  } catch {
    console.error(error);
  }
})();
