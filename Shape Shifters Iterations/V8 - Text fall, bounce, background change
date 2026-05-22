function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

let textX = 645;
let textY = 0;
let speedY = 0;
let gravity = 0.5;
let bounce = -0.7;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  bgColor = color(105, 0, 25);
}

function draw() {
  background(bgColor);

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

  speedY += gravity;
  textY += speedY;

  if (textY > height - 25) {
    textY = height - 25;
    speedY *= bounce;
    bgColor = color(random(255), random(255), random(255));
  }

  push();
  fill(255);
  noStroke();
  textSize(50);
  text("hello andy", textX, textY);
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