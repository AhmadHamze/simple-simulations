/**
 * This code is an alternative approach of creating a cellular automata image
 * keep it and try to make it work using it
 */
function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  pixelDensity(1);
}

function initializeOneBlackPixel() {
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (y === height / 2 && x === width / 2) {
        const index = (x + y * width) * 4;
        // "pixels" is a global variable it allows us to access the pixels of the canvas
        // you need to change 4 values, the red, green, blue and alpha values
        pixels[index] = 0;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 255;
      } else {
        const index = (x + y * width) * 4;
        pixels[index] = 255;
        pixels[index + 1] = 255;
        pixels[index + 2] = 255;
        pixels[index + 3] = 255;
      }
    }
  }
  updatePixels();
}

function draw() {
  background(51);
  // first, initialize the grid with one black pixel in the middle
  initializeOneBlackPixel();
  // It turns out this is hard to do, the grid way is much easier.
  // the difficulty comes from the way the pixels are stored in the canvas
}
