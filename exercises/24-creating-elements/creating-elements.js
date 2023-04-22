let bubblesPopped = 0;
const maxBubblesOnPage = 25;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createBubble = () => {
  // constants to draw bubbles
  const xOffset = randomInt(10, 90); // xOrigin will be used as a percentage
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
    document.querySelector("h1").textContent = bubblesPopped;
  });
};

setInterval(() => {
  if (document.body.children.length > maxBubblesOnPage) return; // prevent infinite bubbles
  createBubble();
}, 2000);
