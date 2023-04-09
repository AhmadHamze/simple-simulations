function initializeGrid(gridVSize, gridHSize) {
  const size = height / gridHSize;
  const grid = new Array(gridVSize)
    .fill(0)
    .map(() => new Array(gridVSize).fill(0));
  for (let i = 0; i < gridVSize; i++) {
    for (let j = 0; j < gridHSize; j++) {
      grid[i][j] = new Cell(i * size, j * size, size);
    }
  }
  return grid;
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

/**
 * The function that switches the state of a cell
 * Use it inside an event listener function, e.g. doubleClicked()
 * @param {cell[][]} grid
 * @param {number} gridVSize
 * @param {number} gridHSize
 */
function switchCell(grid, gridVSize, gridHSize) {
  for (let i = 0; i < gridVSize; i++) {
    for (let j = 0; j < gridHSize; j++) {
      const cell = grid[i][j];
      const distance = dist(
        mouseX,
        mouseY,
        cell.x + cell.size / 2,
        cell.y + cell.size / 2
      );
      if (distance < cell.size / 2) {
        cell.alive = (cell.alive + 1) % 2;
      }
    }
  }
}
