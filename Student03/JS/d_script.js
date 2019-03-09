var player =  document.getElementsByClassName("description");

var i;

function showDescription(nameID){
	console.log('mouse over', nameID);

	switch(nameID){
		case 'chiran': num = 0;
			break;
		case 'sahan': num = 1;
			break;
		case 'nishean': num = 2;
			break;
		case 'anushka': num = 3;
			break;
	}

	for (i = 0; i < player.length; i++) {
  		player[num].style.display = "block";
	}
	 
}

function noDescription(){
	for (i = 0; i < player.length; i++) {
  		player[i].style.display = "none";
	}
}