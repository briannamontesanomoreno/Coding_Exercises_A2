let positions = [];
let delay = 100;
let maxDist = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  positions.push({ x: mouseX, y: mouseY });
  if (positions.length > 100) positions.shift();

  background(0, 25);

  for (let i = 0; i < positions.length; i++) {
    let d = dist(mouseX, mouseY, positions[i].x, positions[i].y);
    if (d < maxDist) {
      let alpha = map(d, 0, maxDist, 255, 0);
      stroke(random(255), random(255), random(255), alpha);
      strokeWeight(5);
      line(mouseX, mouseY, positions[i].x, positions[i].y);
    }
  }
}