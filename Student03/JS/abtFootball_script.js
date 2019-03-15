function showNavigation() {
            var value = document.getElementById("sidebartoggler").checked;
            document.getElementById("navigation").style.display = value ? "none" : "block";
            document.getElementById("container").style.marginLeft = value ? "0px" : "200px";
}

function resizeText(multiplier) {
  if (document.getElementById("pageContainer").style.fontSize == "") {
    document.getElementById("pageContainer").style.fontSize = "1.0em";
  }
  document.getElementById("pageContainer").style.fontSize = parseFloat(document.getElementById("pageContainer").style.fontSize) + (multiplier * 1.0) + "em";
}
