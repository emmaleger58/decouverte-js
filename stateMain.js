var StateMain = {

  preload: function () {
    game.load.spritesheet('naruto', 'sprite_sheet/spritesheetB.png', 434, 107);
  },

  create: function () {
    this.speed=2;
    this.naruto=game.add.sprite(game.world.centerX,game.world.centerY,"naruto");
    this.naruto.anchor.set(0.5,0.5);
    this.naruto.animations.add('down', [0,1,2,3,4,5,6,7,8], 12,true);

    this.naruto.animations.play('down');
  },

  update: function () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.naruto.x-=this.speed;
        this.naruto.animations.play('left');
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      this.naruto.x+=this.speed;
      this.naruto.play('right');

    } else
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
      this.naruto.y-=this.speed;
      this.naruto.play('up');

    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
      this.naruto.y+=this.speed;
      this.naruto.play('down');
    }
    else {
      this.naruto.play('stay');
    }
  }
}
