// color picker elements
const colPickLogoTop = document.getElementById("logoColorTop");
const colPickLogoBottom = document.getElementById("logoColorBottom");
const colPickLogo1 = document.getElementById("logoColor1");
const colPickLogo0 = document.getElementById("logoColor0");
const sizePickLogo = document.getElementById("logoSize");

// set default values of the input elements
colPickLogoTop.value = "#01050e";
colPickLogoBottom.value = "#007db2";
colPickLogo1.value = "#ffffff";
colPickLogo0.value = "#000000";
sizePickLogo.value = 1000;

addEventListener("input", (event) => {
  logoTopColor = colPickLogoTop.value;
  logoBottomColor = colPickLogoBottom.value;
  logoMain1 = colPickLogo1.value;
  logoMain0 = colPickLogo0.value;
  size = sizePickLogo.value;

  drawLogo();
  updateSVG();
});
