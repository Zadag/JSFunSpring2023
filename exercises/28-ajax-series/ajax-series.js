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

  const charObject = {};

  try {
    const response = await axios("https://rickandmortyapi.com/api/character");
    const characters = response.data.results;

    // build an object cooresponding character names to image urls
    characters.forEach((character) => {
      charObject[character.name] = character.image;
    });

    const select = document.querySelector("select");

    characters.forEach((character) => {
      const option = document.createElement("option");
      option.text = character.name;
      select.add(option);
    });

    select.addEventListener("change", (e) => {
      const img = document.querySelector("img");
      img.src = charObject[e.target.value];
    });
  } catch {
    console.error(error);
  }
})();
