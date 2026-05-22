let positions = [];
let delay = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  positions.push({ x: mouseX, y: mouseY });

  if (positions.length > delay) {
    let delayed = positions.shift();
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    line(mouseX, mouseY, delayed.x, delayed.y);
    line(width - mouseX, mouseY, width - delayed.x, delayed.y);
  }

  background(0, 25);
}