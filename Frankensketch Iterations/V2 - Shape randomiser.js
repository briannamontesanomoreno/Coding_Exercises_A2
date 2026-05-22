function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
}

let prevX, prevY;

function draw() {
  let speed = dist(mouseX, mouseY, prevX || mouseX, prevY || mouseY);

  strokeWeight(3);
  stroke(255);
  fill(255);

  let s = floor(random(3));
  if (s === 0) square(mouseX, mouseY, 100);
  if (s === 1) circle(mouseX, mouseY, 100);
  if (s === 2) triangle(mouseX - 50, mouseY + 50, mouseX + 50, mouseY + 50, mouseX, mouseY - 50);

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(0.2, 6);
    fill(255);
    noStroke();
    circle(x, y, r);
  }

  // Trail fades slower when mouse is still, faster when moving
  let fadeAmount = map(speed, 0, 50, 2, 20);
  background(0, 0, 0, fadeAmount);

  prevX = mouseX;
  prevY = mouseY;
}