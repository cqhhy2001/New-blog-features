let themeButton = document.querySelector("#theme-button");
let body = document.querySelector("body");

function changeTheme() {
  body.classList.toggle("dark");
  if (themeButton.textContent === "Dark theme") {
    themeButton.textContent = "Light theme";
  } else {
    themeButton.textContent = "Dark theme";
  }
}

themeButton.addEventListener("click", changeTheme);

// Typewriter animation

const text = "QuantumAlgorithm";
const delay = 200;

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text[index];
    index++;
    setTimeout(type, delay);
  } else {
    cursor.classList.add("blink");
  }
}

type();
