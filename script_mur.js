var blockGrid = [];
const H_GRID = 38;
const V_GRID = 18;
const GRID_SIZE = 40;
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;
var plateau = document.getElementById('plateau');

plateau.style.width = WINDOW_WIDTH;
plateau.style.height = WINDOW_HEIGHT;

for (var i = 0; i < H_GRID; i++) {
  blockGrid.push([]);
  for (var j = 0; j < V_GRID; j++) {
    var block = document.createElement("div");
    block.style.width = "40px";
    block.style.height = "40px";
    block.style.display = "flex";
    block.style.position = "absolute";

    if (random100() > 90) {
      block.style.backgroundColor = "#876D5A";
      block.traverser = false;
    }
    else {
      block.style.backgroundColor = "#4B3A30";
      block.traverser = true;
  }
    block.style.marginLeft = (i * GRID_SIZE).toString() + "px";
    block.style.marginTop = (j * GRID_SIZE).toString() + "px";

    document.getElementById("plateau").appendChild(block);
    blockGrid[i].push(block);
  }
}

function random100() {
return Math.floor(Math.random() * 100);
}
