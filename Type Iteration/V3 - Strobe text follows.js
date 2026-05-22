function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  textSize(120);
  fill(random(255), random(255), random(255));
  noStroke();
  text("Gramatika", mouseX, mouseY);
}