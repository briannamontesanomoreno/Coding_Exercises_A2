let positions = [];
let delays = [15, 30, 50, 80];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  positions.push({ x: mouseX, y: mouseY });

  for (let i = 0; i < delays.length; i++) {
    if (positions.length > delays[i]) {
      let delayed = positions[positions.length - delays[i] - 1];
      let alpha = map(i, 0, delays.length, 255, 80);
      stroke(random(255), random(255), random(255), alpha);
      strokeWeight(map(i, 0, delays.length, 3, 0.5));
      line(mouseX, mouseY, delayed.x, delayed.y);
    }
  }

  if (positions.length > 200) positions.shift();
  background(0, 25);
}