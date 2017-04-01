
function setup() {
	createCanvas(windowWidth, windowHeight);

	//define checkbox size
	boxSize = 150;
	boxRounding = 10;

	//define cross stroke
	stroke1 = 0;
	stroke2 = 0;
	stroke3 = 0;
	stroke4 = 0;
	stroke5 = 0;

	boxX = 50;

	box1Y = 50;
	box2Y = 350;
	box3Y = 650;
	box4Y = 950;
	box5Y = 1250;
}

function draw() {
	background(255);
	stroke(0);
	strokeWeight(1);
	fill(255);

	textSize(150);
	textStyle(BOLD);
	textAlign(LEFT,CENTER);

	//box 1
	rect(boxX,box1Y,boxSize,boxSize,boxRounding);
	
	//box 2
	rect(boxX,box2Y,boxSize,boxSize,boxRounding);

	//box 3
	rect(boxX,box3Y,boxSize,boxSize,boxRounding);

	//box 4
	rect(boxX,box4Y,boxSize,boxSize,boxRounding);

	//box 5
	rect(boxX,box5Y,boxSize,boxSize,boxRounding);

	fill(0);
	text("DAIRY",225,box1Y+80); 
	text("GLUTEN",225,box2Y+80); 
	text("SOY",225,box3Y+80);
	text("NUTS",225,box4Y+80);
	text("EGG",225,box5Y+80);

	stroke(255,0,0);

	strokeWeight(stroke1);
	line(boxX, box1Y, boxX+boxSize, box1Y+boxSize);
	line(boxX, box1Y+boxSize, boxX+boxSize, box1Y);

	strokeWeight(stroke2);
	line(boxX, box2Y, boxX+boxSize, box2Y+boxSize);
	line(boxX, box2Y+boxSize, boxX+boxSize, box2Y);

	strokeWeight(stroke3);
	line(boxX, box3Y, boxX+boxSize, box3Y+boxSize);
	line(boxX, box3Y+boxSize, boxX+boxSize, box3Y);	

	strokeWeight(stroke4);
	line(boxX, box4Y, boxX+boxSize, box4Y+boxSize);
	line(boxX, box4Y+boxSize, boxX+boxSize, box4Y);

	strokeWeight(stroke5);
	line(boxX, box5Y, boxX+boxSize, box5Y+boxSize);
	line(boxX, box5Y+boxSize, boxX+boxSize, box5Y);
  }

  function touchEnded() {
  	//box1
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box1Y && mouseY < box1Y+boxSize) {
  		if (stroke1 == 0) {
  			stroke1 = 10;
  		} else {
  			stroke1 = 0;
  		}
  	}
  	//box2
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box2Y && mouseY < box2Y+boxSize) {
  		if (stroke2 == 0) {
  			stroke2 = 10;
  		} else {
  			stroke2 = 0;
  		}
  	}
  	//box3
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box3Y && mouseY < box3Y+boxSize) {
  		if (stroke3 == 0) {
  			stroke3 = 10;
  		} else {
  			stroke3 = 0;
  		}
  	}
  	//box4
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box4Y && mouseY < box4Y+boxSize) {
  		if (stroke4 == 0) {
  			stroke4 = 10;
  		} else {
  			stroke4 = 0;
  		}
  	}
  	//box5
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box5Y && mouseY < box5Y+boxSize) {
  		if (stroke5 == 0) {
  			stroke5 = 10;
  		} else {
  			stroke5 = 0;
  		}
  	}
  }