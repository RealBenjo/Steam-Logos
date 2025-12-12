const colPickLogoTop = document.getElementById("logoColorTop");
const colPickLogoBottom = document.getElementById("logoColorBottom");
const colPickLogo1 = document.getElementById("logoColor1");
const colPickLogo0 = document.getElementById("logoColor0");
const colorOutput = document.getElementById("color-output");

addEventListener("input", (event) => {
  logoTopColor = colPickLogoTop.value;
  logoBottomColor = colPickLogoBottom.value;
  logoMain1 = colPickLogo1.value;
  logoMain0 = colPickLogo0.value;
  drawLogo();
});
