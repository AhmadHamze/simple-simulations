function initializeGrid(cols, rows) {
  return new Array(cols).fill(0).map(() => new Array(rows).fill(0));
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  const grid = initializeGrid(10, 10);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  console.table(grid);
}
