function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(0, 30);
  noStroke();
  rect(0, 0, width, height);
  textAlign(CENTER, CENTER);
  textSize(120);
  fill(random(255), random(255), random(255));
  text("Gramatika", mouseX, mouseY);
}