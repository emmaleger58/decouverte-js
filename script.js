var plateau = document.querySelector('#plateau'); // variables objet
var pion = document.querySelector('#pion');
var x = 0;
var y;

// programmation des touches de direction
document.onkeydown = function(event) {
  if (event.keyCode == 37) gauche();
  if (event.keyCode == 39) droite();
  if (event.keyCode == 38) haut();
  if (event.keyCode == 40) bas();
} // fin fonction

// quatre fonctions de déplacement
function gauche() {
  x = getComputedStyle(pion).left;
  x = parseInt(x);
  x = x - 20;
  x = x + "px";
  pion.style.left = x;
}

function haut() {
  y = getComputedStyle(pion).top;
  y = parseInt(y);
  y = y - 20;
  y = y + "px";
  pion.style.top = y;
}

function bas() {
  y = getComputedStyle(pion).top;
  y = parseInt(y);
  y = y + 20;
  y = y + "px";
  pion.style.top = y;
}

if (x < 800"px") {
	function droite() {
	  x = getComputedStyle(pion).left;
	  x = parseInt(x);
	  x = x + 20;
	  x = x + "px";
	  pion.style.left = x;
	}
}
