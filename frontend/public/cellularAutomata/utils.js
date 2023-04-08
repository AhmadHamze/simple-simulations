function initializeGrid(cols, rows) {
  return new Array(cols).fill(0).map(() => new Array(rows).fill(0));
}

function drawRectangularCell(grid, i, j, size) {
  const x = i * size;
  const y = j * size;
  // If the grid is 1, draw a white rectangle
  if (grid[i][j] === 1) {
    fill(255);
    stroke(200);
    rect(x, y, size, size);
  }
}
