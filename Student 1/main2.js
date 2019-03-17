
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
  if(validationForm()){
    document.getElementById("myModal").style.display = "block";
    return;
  }
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

function validationForm(){
  var errorMessage = "";
  var fname = document.getElementById("fname").value;
  if(fname == ''){
    errorMessage += "first name is required\n";
  }
  var lname = document.getElementById("lname").value;
  if(lname == ''){
    errorMessage += "last name is required\n";
  }
  var email = document.getElementById("email").value;
  var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email == ''){
    errorMessage += "email is required\n";
  } else if(!regexEmail.test(String(email).toLowerCase())){
    errorMessage += "enter a valid email\n";
  }
  var tel = document.getElementById("number").value;
  var phonenoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(tel == ''){
    errorMessage += "telephone is required\n";
  } else if(!phonenoRegex.test(tel)){
    errorMessage += "enter a valid telephone number\n";
  }
  var address = document.getElementById("address").value;
  if(address == ''){
    errorMessage += "address is required\n";
  }
  if(errorMessage)
    alert(errorMessage);
  return errorMessage.trim() != "";
}

function formSubmit() {
  if (validationForm()){
    return;
  }
  document.getElementById("myModal").style.display = "none";
}
function closeForm(){
  document.getElementById("myModal").style.display = "none";
}
