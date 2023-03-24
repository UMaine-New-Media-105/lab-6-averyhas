Sketch Link: https://editor.p5js.org/averyhas/sketches/8Q0PFd3-J


The first exercise was to create two sprites and make them interact within a game. In this game, the first sprite would be randomly placed around the canvas, and moved by the arrows to "eat" the second sprite--which is also randomly placed on the canvas.

For my game, I chose to derive inspiration from Pacman, with my first sprite being Pacman and my second being a cherry.

After creating the individual functions for both of my sprites, I started by creating the X and Y variables for them both, using this code in the setup function:

```Javascript
let pacManX, pacManY;
let cherryX, cherryY;
```

and this in the draw function:

```Javascript
  pacManX = random(30, 200);
  pacManY = random(30, 200);
  cherryX = random(200, 380);
  cherryY = random(200, 380);
```

I then began writing the code to make Pacman move. To do this, I created a keyPressed function which looked like this:

```Javascript
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
```

This ensured that, when the user presses one of the arrow keys, the sprite moves in the way that is intended.
I then began crafting the code to make the second sprite disappear when it is "eaten."

I started by creating a variable "notEaten," and called it in setup as
```Javascript
notEaten = true;
```

so that the sprite would appear not eaten when the sketch is first created, as well as a variable "d" (for distance)-- to use when making the sprite disappear.

Within draw, I created the code:

```Javascript
  d = dist(pacManX, pacManY, cherryX, cherryY);
  if (d <= 20) {
    notEaten = false;
```

which ensured that, when Pacman is within 20 pixels of the cherry, it'll disappear--appearing "eaten."

Within the Pacman function, I added code which made the sprite change in appearance when the cherry is eaten:

```Javascript
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
```

and in the cherry function, I added code which made the cherry appear on the canvas /only/ when the cherry is not eaten:

```Javascript
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
```

Unfortunately I did not have time during the lab session to do the third and final exercise, which included making the "item" sprite (cherry) appear five
times during the game.
