function setup() {
  frameRate(1);
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  iter = 0;
  iteration = createP("Iteration: ");
  iteration.class("iteration");
  gridHSize = 40;
  gridVSize = 40;
  grid = initializeGrid(gridVSize, gridHSize);
  // Create a grid with a single 0 in the middle
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === gridHSize / 2 && j === gridVSize / 2) {
        grid[i][j] = 0;
        continue;
      }
      grid[i][j] = 1;
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
  iter++;
  iteration.html("Iteration: " + iter);
  const gridCopy = grid.map((arr) => [...arr]);
  for (let i = 0; i < gridVSize; i++) {
    for (let j = 0; j < gridHSize; j++) {
      iM = (i - 1) % gridVSize;
      iP = (i + 1) % gridVSize;
      jM = (j - 1) % gridHSize;
      jP = (j + 1) % gridHSize;
      grid[i][j] =
        (1 +
          gridCopy.at(iM).at(j) +
          gridCopy.at(iP).at(j) +
          gridCopy.at(i).at(jM) +
          gridCopy.at(i).at(jP)) %
        2;
    }
  }
}
