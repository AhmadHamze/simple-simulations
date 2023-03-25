function initializeGrid(cols, rows) {
  return new Array(cols).fill(0).map(() => new Array(rows).fill(0));
}

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

function drawRectangularCell(i, j, size) {
  const x = i * size;
  const y = j * size;
  // If the grid is 1, draw a white rectangle
  if (grid[i][j] === 1) {
    fill(255);
    stroke(0);
    rect(x, y, size, size);
  }
}

function draw() {
  background(51);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      drawRectangularCell(i, j, height / gridHSize);
    }
  }
}
