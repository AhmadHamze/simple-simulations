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

/**
 * The Cell class represents a cell in the grid.
 * White cells are dead, black cells are alive.
 * @class
 * @param {number} x The x coordinate of the cell
 * @param {number} y The y coordinate of the cell
 * @param {number} size The size of the cell
 * @param {number} alive The state of the cell, 0 if dead, 1 if alive
 */
class Cell {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alive = 0;
  }
  drawCell() {
    if (!this.alive) {
      fill(255);
      stroke(200);
      rect(this.x, this.y, this.size, this.size);
    }
  }
}
