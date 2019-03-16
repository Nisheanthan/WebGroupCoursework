
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 1.0) + "em";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
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
  var txt = 'number' + num;
  var value = parseInt(document.getElementById(txt).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(txt).value = value;

}

function decreaseValue(num) {
  var txt = 'number' + num;
  var value = parseInt(document.getElementById(txt).value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById(txt).value = value;
}

function makePurchase() {
  var message = "";
  var total = 0;
  for (let index = 0; index < 8; index++) {
    const cartInput = "number" + (index + 1);
    var quantity = parseInt(document.getElementById(cartInput).value);
    if (quantity > 0) {
      var price = parseFloat(document.getElementById(cartInput + "-price").innerHTML);
      message += quantity + " " + document.getElementById(cartInput + "-name").innerHTML + " size " + document.getElementById(cartInput + "-size").value + " at a cost of LKR " + price + " each \n";
      total += quantity * price;
    }
  }
  if (message) {
    message += "\nTotal: " + total;
    alert(message);
  } else {
    alert("no items added to the cart");
  }
}

