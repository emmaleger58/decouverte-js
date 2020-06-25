var ennemiGrid = [];

for (var i = 0; i < H_GRID; i++) {
  ennemiGrid.push([]);
  for (var j = 0; j < V_GRID; j++) {
    var ennemi = document.createElement("div");
    ennemi.style.width = "40px";
    ennemi.style.height = "40px";
    ennemi.style.display = "flex";
    ennemi.style.position = "absolute";

    if (random100() > 98) {
      ennemi.style.backgroundColor = "red";
      ennemi.traverser = false;
    }
    ennemi.style.marginLeft = (i * GRID_SIZE).toString() + "px";
    ennemi.style.marginTop = (j * GRID_SIZE).toString() + "px";

    document.getElementById("plateau").appendChild(ennemi);
    ennemiGrid[i].push(ennemi);
  }
}

function random100() {
return Math.floor(Math.random() * 100);
}
