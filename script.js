const generateButton = document.getElementById("generate-button");
const paletteContainer = document.querySelector(".palette-container");

generateButton.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = []
  
  for(let i=0; i<5; i++){
    colors.push(generateRandomColor());
  }
  updatePaletteDisplay(colors);
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"

  for (let i = 0; i>6; i++){
    colors += letters[Math.floor(Math.random() * 16)];
  }
  return(color);
}
generatePalette();