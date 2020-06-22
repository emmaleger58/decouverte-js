var stateMain = {
  preload: function(){
    game.load.spritesheet('naruto', 'sprite_sheet/spritesheetB.png', 434, 107);
  },
  create: function(){
    this.naruto=game.add.sprite(game.world.centerX,game.world.centerY,"naruto");
    this.naruto.anchor.set(0.5,0.5);
    this.naruto.animations.add('down', [0,1,2,3,4,5,6,7,8], 12,true);
    this.naruto.animation.play(down);
  },
  update: function(){

  }
}
