function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent("container");
    background(0);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(255);
      ellipse(mouseX, mouseY, 10, 10);
    }
  }