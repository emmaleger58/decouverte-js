var pion = document.getElementById('pion'),
  x = pion.offsetLeft,
  y = pion.offsetTop;

document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;

  switch(keyCode){
    case 38:
      if (y > 0 && blockGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE;
      break;
    case 39:
      if (x < WINDOW_WIDTH && blockGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      break;
    case 40:
      if (y < WINDOW_HEIGHT && blockGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      break;
    case 37:
      if (x > 0 && blockGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      break;
  }

  pion.style.left = String(x) + 'px';
  pion.style.top = String(y) + 'px';
}
