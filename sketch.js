// ============================================================
// Side Quest 1: Exit 8
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let exit8Img;

// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  exit8Img = loadImage("assets/images/exit8.jpg");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// ------------------------------------------------------------
function setup() {
  createCanvas(800, 500);

  // background() fills the canvas with a colour
  background(30, 40, 100);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------
  fill(255, 255, 255); // white
  textAlign(CENTER);
  textSize(14);

  // width and height are built-in p5.js variables that
  // always hold the canvas width and height
  fill(180);
  text("Image loaded from assets/images/", width / 4, 70);
  text("Drawn using p5.js shapes", (width / 4) * 3, 70);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------
  image(exit8Img, 50, 100, 300, 350);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES 
  // ----------------------------------------------------------
  let originX = 100; // left edge of the shape controller
  let originY = 185; // top edge of the shape controller
  stroke(255);
  strokeWeight(9);
  fill(9);

  circle(originX+300, originY, 140);
  circle(originX+300, originY+150, 170);

}

