function setup() {
  frameRate(1);
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  gridHSize = 20;
  gridVSize = 20;
  grid = initializeGrid(gridVSize, gridHSize);
}
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
