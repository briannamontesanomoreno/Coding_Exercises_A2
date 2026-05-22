function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(105, 0, 25);

  stroke(0);
  strokeWeight(10);
  fill(0, 0, 255);

  square(595, 200, 100);
  square(725, 200, 100);

  line(595, 200, 825, 200);
  line(595, 360, 825, 360);

  push();
  fill(25, 0, 25);
  noStroke();
  textSize(100);
  text("L", 725, 300);
  pop();

  let pulse = map(sin(frameCount * 0.2), -1, 1, 35, 65);

  push();
  fill(255);
  noStroke();
  textSize(pulse);
  text("hello andy", 645, 420);
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