var pion = document.getElementById('pion'),
  x = pion.offsetLeft,
  y = pion.offsetTop;

document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;

switch(keyCode){
  case 38:
    if (y > 0 && blockGrid[x][y - 1].traverser)
      y--;
      startAnimationgauche();
      break;

  case 40:
    if (y < V_GRID - 1 && blockGrid[x][y + 1].traverser)
      y++;
      startAnimationbas();
      break;


  case 37:
    if (x > 0 && blockGrid[x - 1][y].traverser)
      x--;
      startAnimationhaut();
      break;

  case 39:
    if (x < H_GRID - 1 && blockGrid[x + 1][y].traverser)
      x++;
      startAnimationdroite();
            break;

  case 32 :
    creatBomb();
    break;
  }

  pion.style.left = String(x * GRID_SIZE) + 'px';
  pion.style.top = String(y * GRID_SIZE) + 'px';
}
