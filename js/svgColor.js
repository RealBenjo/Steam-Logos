const steam_logo_svg = document.getElementById("steamLogoSVG");
const handle_circles = document.getElementById("handle_circles");
const handles = document.getElementById("handles");
const outer_section = document.getElementById("outer_section");
const topGradColor = document.getElementById("topSvgColor");
const bottomGradColor = document.getElementById("bottomSvgColor");

function updateSVG() {
  steam_logo_svg.setAttribute("width", size);
  steam_logo_svg.setAttribute("height", size);
  handle_circles.setAttribute("fill", logoMain0);
  handles.setAttribute("fill", logoMain1);
  topGradColor.setAttribute("stop-color", logoTopColor);
  bottomGradColor.setAttribute("stop-color", logoBottomColor);
}

// draw the logo at first load
updateSVG();