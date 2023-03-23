// Lab #6 Sketch, Avery Haskell

let pacManX, pacManY;
let cherryX, cherryY;

let notEaten;
let d;

function setup() {
  createCanvas(400, 400);

  pacManX = random(30, 200);
  pacManY = random(30, 200);
  cherryX = random(200, 380);
  cherryY = random(200, 380);

  notEaten = true;
}

function draw() {
  background("midnightblue");

  // When Pacman is within 20 pixels of the cherry, the collision occurs.
  d = dist(pacManX, pacManY, cherryX, cherryY);
  if (d <= 20) {
    notEaten = false;
  }

  addCherry(cherryX, cherryY, 0.6);
  pacMan(pacManX, pacManY, 1);
}

// Pacman sprite.
function pacMan(x, y, size) {
  push();
// If the cherry has /not/ been eaten, then sprite will remain the same. If the cherry /has/ been eaten, then the sprite will change to it's intended appearance.
  if (notEaten == true) {
    fill("yellow");
    translate(x, y);
    scale(size);
    rotate(-5.5);
    arc(0, 0, 60, 60, 0, PI + QUARTER_PI + QUARTER_PI, PIE);
    fill("black");
    ellipse(-15, -5, 5, 5);
  } else {
    translate(x, y);
    scale(size);
    fill("gold");
    ellipse(0, 0, 60, 60);
    fill("black");
    ellipse(5, -15, 5, 5);
    rect(5, 0, 25, 0.5);
  }
  pop();
}
// Cherry sprite.
function addCherry(x, y, size) {
// If the cherry has /not/ been eaten, then sprite will appear. If the cherry /has/ been eaten, the sprite will disappear.
  if (notEaten == true) {
    push();
    translate(x, y);
    scale(size);
    fill("green");
    noStroke();
    rect(-3, -27, 5, 15);
    fill("red");
    stroke("darkred");
    strokeWeight(3);
    ellipse(0, 0, 30);
    pop();
  }
}

// Function which moves Pacman as arrow keys are pressed.
function keyPressed() {
  if (keyCode === UP_ARROW) {
    pacManY = pacManY - 15;
  }
  if (keyCode === DOWN_ARROW) {
    pacManY = pacManY + 15;
  }
  if (keyCode === RIGHT_ARROW) {
    pacManX = pacManX + 15;
  }
  if (keyCode === LEFT_ARROW) {
    pacManX = pacManX - 15;
  }
}
