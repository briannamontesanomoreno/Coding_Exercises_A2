let counter = 0;
let letters = [];
let positions = [];
let delay = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  let words = "HELLO";
  let spacing = width / (words.length + 1);
  for (let i = 0; i < words.length; i++) {
    letters.push({
      char: words[i],
      x: spacing * (i + 1),
      y: height / 2,
      origX: spacing * (i + 1),
      origY: height / 2,
      vx: 0,
      vy: 0
    });
  }
}

function draw() {
  background(0, 25);

  positions.push({ x: mouseX, y: mouseY });

  if (positions.length > delay) {
    let delayed = positions.shift();
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    line(mouseX, mouseY, delayed.x, delayed.y);
  }

  for (let l of letters) {
    let d = dist(mouseX, mouseY, l.x, l.y);
    if (d < 120) {
      let force = map(d, 0, 120, 12, 0);
      let angle = atan2(l.y - mouseY, l.x - mouseX);
      l.vx += cos(angle) * force;
      l.vy += sin(angle) * force;
    }

    l.vx *= 0.9;
    l.vy *= 0.9;
    l.x += l.vx;
    l.y += l.vy;
    l.x = constrain(l.x, 40, width - 40);
    l.y = constrain(l.y, 40, height - 40);

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(80);
    text(l.char, l.x, l.y);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg');
    counter++;
  }
}