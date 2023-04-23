// I am pretty comfortable with DOM manipulation through JavaScript so I spent some time
// working on CSS features I haven't worked with before.  In this exercise I used animations, variables,
// and gradients to create this cookie clicker style bubble popping app.  If I have time tomorrow
// I might turn this into a tower defense game.

let bubblesPopped = 0;
const bubbleLimiter = 5;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createBubble = () => {
  // constants to draw bubbles
  const xOffset = randomInt(10, 90); // xOffset will be used as a percentage
  const radius = randomInt(50, 110); // radius will be pixels
  const shineHeight = radius * 0.4;
  const shineWidth = radius * 0.14;
  const shineYOffset = radius * 0.26;
  const shineXOffset = radius * 0.7;
  const shadowDepth = radius * 0.004;
  const animationNumber = randomInt(1, 5);

  // create the bubble div
  const circle = document.createElement("div");
  circle.classList.add("bubble");

  // Use css variables to set generated values
  circle.style.setProperty("--radius", `${radius}px`);
  circle.style.setProperty("--x-offset", `${xOffset}%`);
  circle.style.setProperty("--shine-height", `${shineHeight}px`);
  circle.style.setProperty("--shine-width", `${shineWidth}px`);
  circle.style.setProperty("--shine-x-offset", `${shineXOffset}px`);
  circle.style.setProperty("--shine-y-offset", `${shineYOffset}px`);
  circle.style.setProperty("--shadow-depth", `${shadowDepth}`);
  circle.style.setProperty("--animation-number", `float${animationNumber}`);

  // add the event and handle user click
  document.querySelector("body").appendChild(circle);
  circle.addEventListener("click", () => {
    circle.remove();
    bubblesPopped += 1;
    document.querySelector("h2").textContent = bubblesPopped;
  });

  return circle;
};

const removeExtraBubble = (bubble) => {
  // This timeout insures bubbles are removed off screen
  setTimeout(() => bubble.remove(), 5000 * bubbleLimiter);
};

// Spawn bubbles on an interval
const startBubbling = () => {
  setInterval(() => {
    const bubbles = Array.from(document.querySelectorAll(".bubble"));

    // Create new bubble and set it for future removal
    const bubble = createBubble();
    removeExtraBubble(bubble);
    console.log(bubbles.length);
  }, 900);
};

//Add a button to begin
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.remove();
  const h2 = document.createElement("h2");
  document.querySelector("body").appendChild(h2);
  h2.textContent = 0;
  startBubbling();
});
