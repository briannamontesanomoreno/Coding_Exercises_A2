function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

let textX = 645;
let textY = 420;

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

  let d = dist(mouseX, mouseY, textX, textY);
  if (d < 80) {
    textX = lerp(textX, mouseX, 0.1);
    textY = lerp(textY, mouseY, 0.1);
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