function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
}

function draw() {
  strokeWeight(10);
  stroke(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  square(mouseX, mouseY, 60);

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(0.2, 6);
    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, r);
  }

  background(0, 0, 0, 9.5);
}