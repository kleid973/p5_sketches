var testImage;

function preload() {
  testImage = loadImage("assets/kandinsky.jpg");
  noLoop();
}

function setup() {
  // create a place to draw
  createCanvas(700, 485);

  // load up the pixel[] array so we can read colors out of it later

}


function draw() {
  // clear the background
  background(0, 0, 0);

  // set drawing styles
  stroke(255, 0, 0);
  fill(255, 255, 255);



  // stroke(0, 200, 100, 80);

  testImage.loadPixels();
  // loop over every x,y pixel coordinate in the image
  for (x = 2; x < 300; x++) {
    console.log(x);
    for (y = 0; y < 1500; y++) {
      var redIn = testImage.pixels[(y * 700 + x) * 4 + 0];
      var greenIn = testImage.pixels[(y * 700 + x) * 4 + 1];
      var blueIn = testImage.pixels[(y * 700 + x) * 4 + 2];

      var redOut, blueOut, greenOut;


      redOut = blueIn;
      blueOut = greenIn;
      greenOut = redIn;


      //////////////////
      // Demo 2: pick output from randomly offset input sample
      // creats scatter effect
      // because we are modifying the image as we work, we will sometimes
      // sample a pixel we've already changed, it would be better
      // to read from one image and write out to a different one

      // choose random position for the sample
      var x2 = x + floor(random(-50, 100));
      var y2 = y + floor(random(-50, 100));

      // make sure we don't go outside the image
      x2 = clamp(x2, 0, 700);
      y2 = clamp(y2, 0, 485);

      // use the color from the random position
      // redOut = testImage.pixels[(y2 * 485 + x2) * 4 + 0];
      // greenOut = testImage.pixels[(y2 * 485 + x2) * 4 + 1];
      blueOut = testImage.pixels[(y2 * 485 + x2) * 4 + 2];


      // testImage.pixels[(y * 485 + x) * 4 + 0] = redOut;
      testImage.pixels[(y * 485 + x) * 4 + 1] = greenOut;
      // testImage.pixels[(y * 485 + x) * 4 + 2] = blueOut;
    }
  }
  testImage.updatePixels();

  image(testImage, 0, 0, 700, 485);


}

function clamp(v, low, high) {
  if (v < low) return low;
  if (v > high) return high;
  return v;

  //	v = max(v, low);
  //	v = min(v, high);
  //	return v;
}


// // download the image
// function mouseReleased() {
//   console.log("save");
//   save();
// }
