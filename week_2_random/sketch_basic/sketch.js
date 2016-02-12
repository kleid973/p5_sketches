var gridSize = 50;
var colours = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	noLoop();

	noStroke();

	colours[0] = color(62, 91, 132);
	colours[1] = color(31, 191, 191);
	colours[2] = color(84, 73, 56);
	colours[3] = color(66, 50, 26);
	// fill(204, 255, 240);
}

function draw() {
	background(234, 198, 172);


	var rows = height / gridSize;
	var cols = width / gridSize;

	for (row = 0; row < rows; row++) {
		for (col = 0; col < cols; col++) {
			// col = 0
			//drawthing(x, y);
			drawThing((col * gridSize) + (gridSize / 2), (row * gridSize) + (gridSize /
				2));
		}
	}
}

function drawThing(x, y) {

	// very strong middle bias
	radius = (random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) +
		random(0, 50)) * 0.2;

	//white of the eye
	fill(229, 229, 230);
	ellipse(x, y, radius, radius);

	//iris
	var randomVal = floor(random(0, 4));
	fill(colours[randomVal]);

	//colours[ random number between 0 and 3 ]
	ellipse(x, y, radius / 2, radius / 2);

	//shiny bit
	fill(255, 255, 255);
	rect(x + radius / 10, y - radius / 8, radius / 7, radius / 5);
}
