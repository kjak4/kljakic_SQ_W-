// ============================================================
// Side Quest 1: Exit 8
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let exit8Img;

// ------------------------------------------------------------
// preload()
// Runs once before setup(). Always load images and sounds here
// so they are ready before the sketch tries to use them.
// If you load images inside setup() they may not appear.
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  exit8Img = loadImage("assets/images/exit8.jpg");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// Use it to set up your canvas and draw things that
// only need to appear once (not animated).
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(800, 500);

  // background() fills the canvas with a colour
  background(30, 40, 100);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------

  // fill() sets the colour used for shapes AND text
  // Three numbers = red, green, blue (each 0–255)
  fill(255, 255, 255); // white

  // textAlign() controls how text is anchored to its x position
  // CENTER means the x coordinate is the middle of the text
  textAlign(CENTER);

  // textSize can be changed at any point — it applies to text drawn after it
  textSize(14);

  // width and height are built-in p5.js variables that
  // always hold the canvas width and height
  fill(180);
  text("Image loaded from assets/images/", width / 4, 100);
  text("Drawn using p5.js shapes", (width / 4) * 3, 100);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------
  image(exit8Img, 50, 85, 300, 300);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES 
  // ----------------------------------------------------------
  stroke(80);
  strokeWeight(2);
  fill(210);

  circle((width / 4) * 3, 350, 80);

}

