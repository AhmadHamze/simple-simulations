function setup() {
  // frameRate(5);
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
  startButton.mousePressed(startStopSimulation);
  gridHSize = 64;
  gridVSize = 64;
  running = false;
  grid = initializeGridColored(gridVSize, gridHSize);
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
  const walker = new Walker(
    width / 2 + height / gridHSize / 2,
    height / 2 + height / gridHSize / 2
  );
  startButton.html("Start");
  if (running) {
    for (let i = 0; i <= 100; i++) {
      walker.move(height / gridHSize);
    }
    increaseCellColor(grid, gridVSize, gridHSize, walker.x, walker.y);
    // * You can draw the walker, usefull for debugging
    // walker.drawWalker();
    iteration.html("Iteration: " + iter);
    startButton.html("Stop");
    iter++;
  }
}
