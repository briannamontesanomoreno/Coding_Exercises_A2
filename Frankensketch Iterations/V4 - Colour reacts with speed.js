let prevX, prevY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
}

function draw() {
  let speed = dist(mouseX, mouseY, prevX || mouseX, prevY || mouseY);
  let shapeSize = map(speed, 0, 50, 20, 200);

  let col;
  if (speed < 15) {
    col = color(255, 0, 0);
  } else if (speed < 30) {
    col = color(255, 200, 0);
  } else {
    col = color(0, 255, 0);
  }

  strokeWeight(3);
  stroke(col);
  fill(col);

  let s = floor(random(3));
  if (s === 0) square(mouseX, mouseY, shapeSize);
  if (s === 1) circle(mouseX, mouseY, shapeSize);
  if (s === 2) triangle(mouseX - shapeSize/2, mouseY + shapeSize/2, mouseX + shapeSize/2, mouseY + shapeSize/2, mouseX, mouseY - shapeSize/2);

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(0.2, 6);
    fill(col);
    noStroke();
    circle(x, y, r);
  }

  let fadeAmount = map(speed, 0, 50, 2, 20);
  background(0, 0, 0, fadeAmount);

  prevX = mouseX;
  prevY = mouseY;
}