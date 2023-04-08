function setup() {
  frameRate(1);
  const container = createDiv("");
  container.class("container");
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  iter = 0;
  iteration = createP("Iteration: 0");
  iteration.parent("container");
  iteration.class("iteration");
  startButton = createButton("Start");
  startButton.parent("container");
  startButton.mousePressed(startStopSimulation);
  gridHSize = 20;
  gridVSize = 20;
  running = false;
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

function startStopSimulation() {
  running = !running;
}

function draw() {
  background(51);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      drawRectangularCell(grid, i, j, height / gridHSize);
    }
  }
  startButton.html("Start");
  if (running) {
    iteration.html("Iteration: " + iter);
    startButton.html("Stop");
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
    iter++;
  }
}
