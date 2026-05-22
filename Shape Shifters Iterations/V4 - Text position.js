function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(105, 0, 25);

  stroke(0);
  strokeWeight(10);
  fill(0, 0, 255);

  square(100, 200, 100);
  square(230, 200, 100);

  line(100, 200, 330, 200);
  line(100, 360, 330, 360);

  push();
  fill(25, 0, 25);
  noStroke();
  textSize(100);
  text("L", 230, 300);
  pop();

  push();
  fill(255);
  noStroke();
  textSize(50);
  text("hello andy", 645, 360);
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('myCanvas', 'jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}