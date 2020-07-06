var animationInterval;
var spriteSheet = document.getElementById("pion");
var widthOfSpriteSheet = 95;
var widthOfEachSprite = 32;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimationbas() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

function startAnimationhaut() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 96px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}


function startAnimationgauche() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 32px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

function startAnimationdroite() {
  stopAnimation();
  var position = widthOfEachSprite; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 64px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}



//ennemy

var animationIntervalVilain;
var spriteSheetVilain = document.getElementById("vilain");

function stopAnimationVilain() {
  clearInterval(animationIntervalVilain);
}

function startAnimationVilainBas() {
  stopAnimationVilain();
  var position = widthOfEachVilain; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachVilain; //difference between two sprites

  animationIntervalVilain = setInterval(() => {
    spriteSheetVilain.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteVilain) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachVilain;
    }
    //reset the position to show first sprite after the last one
  }, speed);

}


function startAnimationVilainHaut() {
  stopAnimationVilain();
  var position = widthOfEachVilain; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachVilain; //difference between two sprites

  animationIntervalVilain = setInterval(() => {
    spriteSheetVilain.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteVilain) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachVilain;
    }
    //reset the position to show first sprite after the last one
  }, speed);

}


function startAnimationVilainGauche() {
  stopAnimationVilain();
  var position = widthOfEachVilain; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachVilain; //difference between two sprites

  animationIntervalVilain = setInterval(() => {
    spriteSheetVilain.style.backgroundPosition = `-${position}px 120px`;

    if (position < widthOfSpriteVilain) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachVilain;
    }
    //reset the position to show first sprite after the last one
  }, speed);

}

function startAnimationVilainDroite() {
  stopAnimationVilain();
  var position = widthOfEachVilain; //start position for the image
  const speed = 110; //in millisecond(ms)
  const diff = widthOfEachVilain; //difference between two sprites

  animationIntervalVilain = setInterval(() => {
    spriteSheetVilain.style.backgroundPosition = `-${position}px 40px`;

    if (position < widthOfSpriteVilain) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachVilain;
    }
    //reset the position to show first sprite after the last one
  }, speed);

}
