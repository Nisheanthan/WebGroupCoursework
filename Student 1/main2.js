
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 1.0) + "em";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("scrollUpBtn").style.display = "block";
  } else {
    document.getElementById("scrollUpBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Quantity Up Down 
function increaseValue(num) {
  var txt='number'+num;
  var value = parseInt(document.getElementById(txt).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(txt).value = value;
  
}

function decreaseValue(num) {
  var txt='number'+num;
  var value = parseInt(document.getElementById(txt).value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById(txt).value = value;
}

