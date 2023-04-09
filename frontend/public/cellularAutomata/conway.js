function setup() {
  frameRate(1);
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  gridHSize = 20;
  gridVSize = 20;
  grid = initializeGrid(gridVSize, gridHSize);
}

function doubleClicked() {
  switchCell(grid, gridVSize, gridHSize);
}

function draw() {
  background(0);

  for (let i = 0; i < gridVSize; i++) {
    for (let j = 0; j < gridHSize; j++) {
      grid[i][j].drawCell();
    }
  }
}
