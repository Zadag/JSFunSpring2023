// I am pretty comfortable with DOM manipulation through JavaScript so I spent some time
// working on CSS features I haven't worked with before.  In this exercise I used animations, variables,
// and gradients to create this cookie clicker style bubble popping app.  If I have time tomorrow
// I might turn this into a tower defense game.

let hp = 5;
let bubblesPopped = 0;
const bubbleLimiter = 8;
let intervalId;
let bubbleID = 0;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const clearDom = () => {
  const body = document.querySelector("body");
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
};

const createBubble = ({ type }) => {
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
  circle.dataset.bubbleid = bubbleID;
  bubbleID += 1;

  // Use css variables to set generated values
  circle.style.setProperty("--radius", `${radius}px`);
  circle.style.setProperty("--x-offset", `${xOffset}%`);
  circle.style.setProperty("--shine-height", `${shineHeight}px`);
  circle.style.setProperty("--shine-width", `${shineWidth}px`);
  circle.style.setProperty("--shine-x-offset", `${shineXOffset}px`);
  circle.style.setProperty("--shine-y-offset", `${shineYOffset}px`);
  circle.style.setProperty("--shadow-depth", `${shadowDepth}`);
  circle.style.setProperty("--animation-number", `float${animationNumber}`);
  type === "zen"
    ? circle.style.setProperty("--animation-cycles", "infinite")
    : circle.style.setProperty("--animation-cycles", 1);

  // add the event and handle user click
  document.querySelector("body").appendChild(circle);
  circle.addEventListener("mousedown", () => {
    circle.remove();
    bubblesPopped += 1;
    document.querySelector("h2").textContent = bubblesPopped;
  });

  return circle;
};

const gameOver = () => {
  clearDom();
  const gameOverDiv = document.createElement("div");
  gameOverDiv.classList.add("game-over-modal");
  const gameOverMsg = document.createElement("p");
  gameOverMsg.textContent = "Game Over";
  gameOverMsg.classList.add("game-over-message");
  const gameOverOptions = document.createElement("p");
  gameOverOptions.textContent = `You popped ${bubblesPopped} bubbles.`;
  gameOverOptions.classList.add("game-over-options");

  const playAgainBtn = document.createElement("button");
  playAgainBtn.classList.add("game-button");
  playAgainBtn.textContent = "Try again";

  const playZenBtn = document.createElement("button");
  playZenBtn.classList.add("game-button");
  playZenBtn.textContent = "Play zen";

  const gameOverBtns = document.createElement("div");
  gameOverBtns.classList.add("game-over-buttons");

  document.body.appendChild(gameOverDiv);
  gameOverDiv.appendChild(gameOverMsg);
  gameOverDiv.appendChild(gameOverOptions);
  gameOverDiv.appendChild(gameOverBtns);
  gameOverBtns.appendChild(playAgainBtn);
  gameOverBtns.appendChild(playZenBtn);

  playAgainBtn.addEventListener("click", () => {
    bubblesPopped = 0;
    bubbleID = 0;
    hp = 5;
    clearDom();
    appendScore();
    appendHP();
    startBubbling({ mode: "tower-defense" });
  });

  playZenBtn.addEventListener("click", () => {
    bubblesPopped = 0;
    bubbleID = 0;
    hp = 5;
    clearDom();
    appendScore();
    startBubbling({ mode: "zen" });
  });
};

const appendHP = () => {
  const hpDisplay = document.createElement("p");
  hpDisplay.classList.add("hp-display");
  hpDisplay.textContent = 5;
  document.querySelector("body").appendChild(hpDisplay);
};

const removeExtraBubble = (bubble, mode) => {
  // This insures cycling bubbles are removed off screen
  if (mode === "zen") {
    setTimeout(() => bubble.remove, 5000 * bubbleLimiter);
  }

  if (mode === "tower-defense") {
    setTimeout(() => {
      // if bubble completes animation then it made it past the screen
      const bubbles = document.body.querySelectorAll(".bubble");
      if (Array.from(bubbles).includes(bubble)) {
        if (hp === 1) {
          gameOver();
          clearInterval(intervalId);
          intervalId = null;
        } else {
          hp -= 1;
          document.querySelector(".hp-display").textContent = hp;
        }
      }
    }, 4600);
  }
};

// Spawn bubbles on an interval
const startBubbling = ({ mode }) => {
  intervalId = setInterval(() => {
    // Create new bubble and set it for future removal
    const bubble = createBubble({ type: mode });
    removeExtraBubble(bubble, mode);
  }, 900);

  if (mode === "tower-defense") {
    setTimeout(() => {
      if (hp === 1) return;
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        const bubble = createBubble({ type: mode });
        removeExtraBubble(bubble, mode);
      }, 600);
    }, 15000);

    setTimeout(() => {
      if (hp === 1) return;
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        const bubble = createBubble({ type: mode });
        removeExtraBubble(bubble, mode);
      }, 400);
    }, 25000);
  }
};

const appendScore = () => {
  const h2 = document.createElement("h2");
  document.querySelector("body").appendChild(h2);
  h2.textContent = 0;
};

//Add a button to begin
const zenBtn = document.querySelector("#zen-mode");
zenBtn.addEventListener("click", () => {
  clearDom();
  appendScore();
  startBubbling({ mode: "zen" });
});

const tdBtn = document.querySelector("#tower-defense-mode");
tdBtn.addEventListener("click", () => {
  clearDom();
  appendScore();
  appendHP();

  startBubbling({ mode: "tower-defense" });
});
