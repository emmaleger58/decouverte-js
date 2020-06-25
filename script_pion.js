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
      startAnimationhaut();
      break;
    case 39:
      if (x < WINDOW_WIDTH && blockGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      startAnimationgauche();

      break;
    case 40:
      if (y < WINDOW_HEIGHT && blockGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      startAnimationbas();
      break;
    case 37:
      if (x > 0 && blockGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      startAnimationdroite();

      break;
  }

  pion.style.left = String(x) + 'px';
  pion.style.top = String(y) + 'px';
}

var animationInterval;
var spriteSheet = document.getElementById("pion");
var widthOfSpriteSheetBas = 452;
var widthOfEachSpriteBas = 50;
var heightOfSpriteSheetBas = 109;
var widthOfSpriteSheetHaut = 452;
var widthOfEachSpriteHaut = 50;
var heightOfSpriteSheetHaut = 115;
var widthOfSpriteSheetGauche = 744;
var widthOfEachSpriteGauche = 83;
var heightOfSpriteSheetGauche = 112;
var widthOfSpriteSheetDroite = 745;
var widthOfEachSpriteDroite = 83;
var heightOfSpriteSheetDroite = 113;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimationbas() {
  stopAnimation();
  let position = widthOfEachSpriteBas; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSpriteBas; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheetBas) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSpriteBas;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}


function startAnimationhaut() {
  stopAnimation();
  let position = widthOfEachSpriteHaut; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSpriteHaut; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 40px`;

    if (position < widthOfSpriteSheetHaut) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSpriteHaut;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}


function startAnimationgauche() {
  stopAnimation();
  let position = widthOfEachSpriteGauche; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSpriteGauche; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 80px`;

    if (position < widthOfSpriteSheetGauche) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSpriteGauche;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

function startAnimationdroite() {
  stopAnimation();
  let position = widthOfEachSpriteDroite; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSpriteDroite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 120px`;

    if (position < widthOfSpriteSheetDroite) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSpriteDroite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}
