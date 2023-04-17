function setup() {
  frameRate(1);
  const container = createDiv("");
  container.class("container");
  const canvas = createCanvas(640, 640);
  canvas.parent("container");
  iter = 0;
  iteration = createP("Iteration: 0");
  iteration.parent("container");
  iteration.class("iteration");
  startButton = createButton("Start");
  startButton.parent("container");
  randomizeButton = createButton("Randomize");
  randomizeButton.parent("container");
  startButton.mousePressed(startStopSimulation);
  randomizeButton.mousePressed(randomize);
  gridHSize = 64;
  gridVSize = 64;
  running = false;
  grid = initializeGrid(gridVSize, gridHSize);
}

function mousePressed() {
  switchCell(grid, gridVSize, gridHSize);
}

function startStopSimulation() {
  running = !running;
}

function draw() {
  background(51);

  for (let i = 0; i < gridVSize; i++) {
    for (let j = 0; j < gridHSize; j++) {
      grid[i][j].drawCell();
    }
  }
  startButton.html("Start");
  if (running) {
    iteration.html("Iteration: " + iter);
    startButton.html("Stop");
    const gridCopy = grid.map((arr) =>
      arr.map((cell) => new Cell(cell.x, cell.y, cell.size, cell.alive))
    );
    for (let i = 0; i < gridVSize; i++) {
      for (let j = 0; j < gridHSize; j++) {
        iM = (i - 1) % gridVSize;
        iP = (i + 1) % gridVSize;
        jM = (j - 1) % gridHSize;
        jP = (j + 1) % gridHSize;
        grid[i][j].alive =
          (gridCopy.at(iM).at(j).alive +
            gridCopy.at(iP).at(j).alive +
            gridCopy.at(i).at(jM).alive +
            gridCopy.at(i).at(jP).alive) %
          2;
      }
    }
    iter++;
  }
}
