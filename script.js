//var plateau = document.getElementById('plateau'); // variables objet
var pion = document.getElementById('pion');
var x;
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
  x = x - 40 + "px";
  pion.style.left = x;
}

function droite() {
  x = getComputedStyle(pion).left;
  x = parseInt(x);
  x = x + 40 + "px";
  pion.style.left = x;
}

function haut() {
  y = getComputedStyle(pion).top;
  y = parseInt(y);
  y = y - 40 + "px";
  pion.style.top = y;
}

function bas() {
  y = getComputedStyle(pion).top;
  y = parseInt(y);
  y = y + 40 + "px";
  pion.style.top = y;
}

if (x < 0 + "px") x = 0 + "px"; // Si elles sont inférieures à 0
if (y < 0 + "px") y = 0 + "px";
if (x > 760 + "px") x = 760 + "px";// Si elles sont supérieures à 760
if (y > 760 + "px") y = 760 + "px";
