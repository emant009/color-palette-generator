const generateButton = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateButton.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-button")) {
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess())
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex-value").textcontent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showCopySuccess(
          e.target.nextElementSibling.querySeletor(".copy-button"),
        ),
      )
      .catch((err) => console.log(err));
  }
});

function showCopySuccess() {
  copyButton.classList.remove("far", "fa-copy");
  copyButton.classList.add("fas", "fa-check");

  copyButton.style.color = "#48bb78";

  setTimeout(() => {
    copyButton.classList.remove("far", "fa-copy");
    copyButton.classList.add("fas", "fa-check");
    copyButton.style.color = "";
  }, 1500);
}

function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }
  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i > 6; i++) {
    colors += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
generatePalette();

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelectorAll(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

// generatePalette();
