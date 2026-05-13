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
  let originX = 600; 
  let originY = 200; // 
  stroke(232, 215, 30);
  strokeWeight(12);
  fill(138, 184, 161);

  circle(originX, originY, 140);
  circle(originX, originY+150, 170);

  strokeWeight(0);
  fill(209, 25, 25);
  textSize(28);
  text("Exit", (width / 4) * 3, 210);

  stroke(200);
  strokeWeight(1);
  fill(140, 177, 219);
  quad(originX-25, originY+130, originX+25, originY+130, originX+25, originY+230, originX-25, originY+230);
  fill(59, 22, 27);
  circle(originX, originY+132, 10);
  quad(originX, originY+132, originX+10, originY+170, originX, originY+190, originX-10, originY+170);

  fill(214, 183, 141);
  circle(originX, originY+110, 40);}


