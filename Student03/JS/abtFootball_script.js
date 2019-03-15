function showNavigation() {
    var navigatorStyle = document.getElementById("navContainer").style;
    var helperDivStyle = document.getElementById("helperDiv").style;
    var pageContainerStyle = document.getElementById("pageContainer").style;

    var value = document.getElementById("helperNavToggler").checked;

    if(value){
      navigatorStyle.display = "none";
      helperDivStyle.position = "absolute";
      pageContainerStyle.position = "absolute";
      pageContainerStyle.width = "77%";
    }else{
      navigatorStyle.display = "block";
      helperDivStyle.position = "initial";
      pageContainerStyle.position = "initial";
      pageContainerStyle.width = "62%";
    }
    helperDivStyle.left = "0px";
    pageContainerStyle.left = "45px";
}

function resizeText(multiplier) {
  if (document.getElementById("pageContainer").style.fontSize == "") {
    document.getElementById("pageContainer").style.fontSize = "1.0em";
  }
  document.getElementById("pageContainer").style.fontSize = parseFloat(document.getElementById("pageContainer").style.fontSize) + (multiplier * 1.0) + "em";
}
