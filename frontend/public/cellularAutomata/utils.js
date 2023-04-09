function initializeGrid(gridVSize, gridHSize) {
  const size = height / gridHSize;
  const grid = new Array(gridVSize)
    .fill(0)
    .map(() => new Array(gridVSize).fill(0));
  for (let i = 0; i < gridVSize; i++) {
    for (let j = 0; j < gridHSize; j++) {
      grid[i][j] = new Cell(i * size, j * size, size, 0);
    }
  }
  return grid;
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
  constructor(x, y, size, alive = 0) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alive = alive;
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
 * @param {Cell[][]} grid
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
