/**
 * This code is an alternative approach of creating a cellular automata image
 * keep it and try to make it work using it
 */
function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("container");
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (y % 2 === 0 && x % 2 === 0) {
        const index = (x + y * width) * 4;
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
