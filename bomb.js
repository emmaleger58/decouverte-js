let bombs = [];

for (var i = 0; i < 3; i++) {
  bomb = document.createElement("div");
  bomb.style.width = GRID_SIZE + "px";
  bomb.style.height = GRID_SIZE + "px";
  bomb.style.backgroundImage = "url(sprite_sheet/spritesheet-bomb.png)";
  bomb.style.backgroundSize = "contain";
  bomb.style.position = "absolute";
  bomb.style.zIndex = "100";
  bomb.libre = true;
  bomb.id = "bomb" + String(i);

  bombs.push(bomb);
}

function createBombe(blockGrid) {
  let bombset = false
  for (var i = 0; i < bombs.length; i++) {
    if (bombs[i].libre && !bombset) {
      var bomb = bombs[i];
      bomb.libre = false;
      bombset = true;

      bomb.style.left = String(x * GRID_SIZE) + "px";
      bomb.style.top = String(y * GRID_SIZE) + "px";
      bomb.x = x;
      bomb.y = y;
    }
  }
  blockGrid[bomb.x][bomb.y].traverser = false;
       blockGrid[bomb.x][bomb.y].bomb = true;
       document.getElementById('plateau').appendChild(bomb);

       setTimeout(function explose() {
         if (bomb.x < H_GRID - 1) {

           blockGrid[bomb.x + 1][bomb.y].traverser = true;
           blockGrid[bomb.x + 1][bomb.y].style.backgroundColor = "green";
         }
         if (bomb.x > 0) {

           blockGrid[bomb.x - 1][bomb.y].traverser = true;
           blockGrid[bomb.x - 1][bomb.y].style.backgroundColor = "green";
         }
         if (bomb.y < V_GRID - 1) {

           blockGrid[bomb.x][bomb.y + 1].traverser = true;
           blockGrid[bomb.x][bomb.y + 1].style.backgroundColor = "green";
         }
         if (bomb.y > 0) {

           blockGrid[bomb.x][bomb.y - 1].traverser = true;
           blockGrid[bomb.x][bomb.y - 1].style.backgroundColor = "green";
         }

         //vérifie la presence d'ennemis
         for (var i = 0; i < vilainListe.length; i++) {
           if (parseInt(bomb.style.left) == vilainListe[i].offsetLeft && parseInt(bomb.style.top) - GRID_SIZE == vilainListe[i].offsetTop ) {
             vilainListe[i].traverser = true;
             vilainListe[i].remove();
             vilainListe.splice(i,1);
             break;
           }
           if (parseInt(bomb.style.left) - GRID_SIZE == vilainListe[i].offsetLeft && parseInt(bomb.style.top) == vilainListe[i].offsetTop ) {
             vilainListe[i].traverser = true;
             vilainListe[i].remove();
             vilainListe.splice(i,1);
             break;
           }
           if (parseInt(bomb.style.left) + GRID_SIZE == vilainListe[i].offsetLeft && parseInt(bomb.style.top) == vilainListe[i].offsetTop ) {
             vilainListe[i].traverser = true;
             vilainListe[i].remove();
             vilainListe.splice(i,1);
             break;
           }
           if (parseInt(bomb.style.left) == vilainListe[i].offsetLeft && parseInt(bomb.style.top) + GRID_SIZE == vilainListe[i].offsetTop ) {
             vilainListe[i].traverser = true;
             vilainListe[i].remove();
             vilainListe.splice(i,1);
             break;
           }

         }


         //verifie la presence du joueur

           if (bomb.x == x && bomb.y == y ) {
             pion.traverser = true;
             pion.remove();
             setTimeout(gameOver,1000);
           }

           if (bomb.x == x && bomb.y == y-1 ) {
             pion.traverser = true;
             pion.remove();
             setTimeout(gameOver,1000);
           }

           if (bomb.x == x-1 && bomb.y == y ) {
             pion.traverser = true;
             pion.remove();
             setTimeout(gameOver,1000);
           }
           if (bomb.x == x+1 && bomb.y == y ) {
             pion.traverser = true;
             pion.remove();
             setTimeout(gameOver,1000);
           }
           if (bomb.x == x && bomb.y == y+1 ) {
             pion.traverser = true;
             pion.remove();
             setTimeout(gameOver,1000);
           }


         bomb.remove();
         blockGrid[bomb.x][bomb.y].traverser = true;
         blockGrid[bomb.x][bomb.y].bomb = false;
         bomb.libre = true;
         blockGrid[bomb.x][bomb.y].style.backgroundColor = "green";
         if (vilainListe.length == 0) {
           setTimeout(victoire,1000);
         }
       }, 2000);

     }

 function gameOver(){
   alert("Game over !!");
   document.location.reload(true);
 }

 function victoire(){
   alert("Victoire !!");
   document.location.reload(true);
 }
