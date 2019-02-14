
function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 1.0) + "em";
  }

  $("plustext").addEvent("click", function() {resizeText(1);});
  $("minustext").addEvent("click", function() {resizeText(-1);});