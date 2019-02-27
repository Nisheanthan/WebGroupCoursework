
function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 1.0) + "em";
  }

  document.getElementById("plustext").addEvent("click", function() {resizeText(1);});
  document.getElementById("minustext").addEvent("click", function() {resizeText(-1);});