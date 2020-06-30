var vilainListe = [];
var widthOfSpriteVilain = 150;
var widthOfEachVilain = 37.5;
var heightOfEachVilain = 40;

for (var i = 0; i < 10; i++) {
  let vilain = document.createElement('div');
  let x = 0;
  let y = 0;
  while (!blockGrid[x][y].traverser || (x === 0 && y ===0)) {
    x = Math.floor(Math.random() * (H_GRID));
    y = Math.floor(Math.random() * (V_GRID));
  }
  blockGrid[x][y].traverser = false;
  vilain.vilainX = x;
  vilain.vilainY = y;
  vilain.direction = "right";
  vilain.id = "vilain" + String(i);
  vilain.style.width = widthOfEachVilain + "px";
  vilain.style.height = heightOfEachVilain + "px";
  vilain.style.position = "absolute";
  vilain.style.backgroundImage = "url(sprite_sheet/dog-removebgpng1.png)";
  vilain.style.left = String(vilain.vilainX * GRID_SIZE) + "px";
  vilain.style.top = String(vilain.vilainY * GRID_SIZE) + "px";
  vilain.style.zIndex = "95";
  vilain.id = "vilain";
  plateau.appendChild(vilain);
  vilainListe.push(vilain);
}

var frame = 0;

function loop() {
  if (frame === 60) {
    for (var i = 0; i < vilainListe.length; i++) {
      let vilain = vilainListe[i];
      let vilainX = vilain.vilainX;
      let vilainY = vilain.vilainY;
      let direction = vilain.direction;
      blockGrid[vilainX][vilainY].traverser = true;
      switch (direction) {
        case "left":
          if (vilainY > 0 && blockGrid[vilainX][vilainY - 1].traverser) {
            vilainY--;
            break;
          }
        case "right":
          if (vilainX < H_GRID - 1 && blockGrid[vilainX + 1][vilainY].traverser) {
            vilainX++;
            break;
          }
        case "up":
          console.log(vilainY)
          if (vilainY < V_GRID - 1 && blockGrid[vilainX][vilainY + 1].traverser){
            vilainY++;
            break;
          }
        case "down":
          if (vilainX > 0 && blockGrid[vilainX - 1][vilainY].traverser) {
            vilainX--;
            break;
          }
      }
      vilain.style.left = String(vilainX * GRID_SIZE) + 'px';
      vilain.style.top = String(vilainY * GRID_SIZE) + 'px';

      let random = random100();

      if (random < 25) {
        direction = "left";
        startAnimationVilainGauche();
      }

      if (random >= 25 && random < 50) {
        direction = "right";
        startAnimationVilainDroite();
      }

      if (random >= 50 && random < 75) {
        direction = "up";
        startAnimationVilainHaut();
      }

      if (random > 75) {
        direction = "down";
        startAnimationVilainBas();
      }

      vilain.vilainX = vilainX;
      vilain.vilainY = vilainY;
      vilain.direction = direction;
      blockGrid[vilainX][vilainY].traverser = false ;
    }
    frame = 0;
  }

  frame++;

  window.requestAnimationFrame(loop);

}

window.requestAnimationFrame(loop);
