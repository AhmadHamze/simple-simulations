function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  gridHSize = 40;
  gridVSize = 40;
  grid = initializeGrid(gridVSize, gridHSize);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = floor(random(2)); // 0 or 1
    }
  }
}

function draw() {
  background(51);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      drawRectangularCell(grid, i, j, height / gridHSize);
    }
  }
}
