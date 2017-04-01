
function setup() {
	createCanvas(windowWidth, windowHeight);

	//define checkbox size
	boxSize = 50;
	boxRounding = 10;

	//define cross stroke
	stroke1 = 0;
	stroke2 = 0;
	stroke3 = 0;
	stroke4 = 0;
	stroke5 = 0;
}

function draw() {
	background(255);
	stroke(0);
	strokeWeight(1);
	fill(255);

	textSize(60);
	textStyle(BOLD);
	textAlign(LEFT,CENTER);

	//box 1
	rect(50,50,boxSize,boxSize,boxRounding);
	/*
	//box 2
	rect(50,150,boxSize,boxSize,boxRounding);

	//box 3
	rect(50,250,boxSize,boxSize,boxRounding);

	//box 4
	rect(50,350,boxSize,boxSize,boxRounding);

	//box 5
	rect(50,450,boxSize,boxSize,boxRounding);
*/
	fill(0);
	text("DAIRY",125,75); /*
	text("GLUTEN",125,175);
	text("SOY",125,275);
	text("NUTS",125,375);
	text("EGG",125,475);
*/
	stroke(255,0,0);

	strokeWeight(stroke1);
	line(50,50,100,100);
	line(50,100,100,50);
/*
	strokeWeight(stroke2);
	line(50,150,100,200);
	line(50,200,100,150);

	strokeWeight(stroke3);
	line(50,250,100,300);
	line(50,300,100,250);	

	strokeWeight(stroke4);
	line(50,350,100,400);
	line(50,400,100,350);

	strokeWeight(stroke5);
	line(50,450,100,500);
	line(50,500,100,450); */
  }

  function touchEnded() {
  	//box1
  	if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100) {
  		if (stroke1 == 0) {
  			stroke1 = 5;
  		} else {
  			stroke1 = 0;
  		}
  	}
  	//box2
  	if (mouseX > 50 && mouseX < 100 && mouseY > 150 && mouseY < 200) {
  		if (stroke2 == 0) {
  			stroke2 = 5;
  		} else {
  			stroke2 = 0;
  		}
  	}
  	//box3
  	if (mouseX > 50 && mouseX < 100 && mouseY > 250 && mouseY < 300) {
  		if (stroke3 == 0) {
  			stroke3 = 5;
  		} else {
  			stroke3 = 0;
  		}
  	}
  	//box4
  	if (mouseX > 50 && mouseX < 100 && mouseY > 350 && mouseY < 400) {
  		if (stroke4 == 0) {
  			stroke4 = 5;
  		} else {
  			stroke4 = 0;
  		}
  	}
  	//box5
  	if (mouseX > 50 && mouseX < 100 && mouseY > 450 && mouseY < 500) {
  		if (stroke5 == 0) {
  			stroke5 = 5;
  		} else {
  			stroke5 = 0;
  		}
  	}
  }