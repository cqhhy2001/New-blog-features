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
