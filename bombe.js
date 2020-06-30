bombTimer = setTimeout(function createBomb() {
  var bomb = document.createElement('div');
  pion.appendChild(bomb);
  bomb.style.backgroundImage = "url(sprite_sheet/spritesheet-bomb)";
  bomb.style.zIndex = "90";
  bomb.style.width = GRID_SIZE + "px";
  bomb.style.height = GRID_SIZE + "px";
  bomb.style.position = "absolute";
  // bomb.style.
  // bomb.style.
  // bomb.style.
  // bomb.style.
  // bomb.style.
}, 3000);
