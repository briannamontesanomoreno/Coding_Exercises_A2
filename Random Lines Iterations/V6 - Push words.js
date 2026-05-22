let counter = 0;
let letters = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  let words = "BYE";
  let spacing = width / (words.length + 1);
  for (let i = 0; i < words.length; i++) {
    letters.push({
      char: words[i],
      x: spacing * (i + 1),
      y: height / 2,
      vx: 0
    });
  }
}

function draw() {
  background(0, 25);

  // Draw vertical line at mouse
  stroke(random(255), random(255), random(255));
  strokeWeight(2);
  line(mouseX, 0, mouseX, height);

  // Push letters away from mouse line
  for (let l of letters) {
    let d = abs(mouseX - l.x);
    if (d < 80) {
      let force = map(d, 0, 80, 15, 0);
      l.vx += l.x < mouseX ? -force : force;
    }

    l.vx *= 0.92;
    l.x += l.vx;

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