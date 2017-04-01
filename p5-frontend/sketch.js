
function setup() {
	createCanvas(640, 520);

	//define checkbox size
	boxSize = 50;
	boxRounding = 10;

	//define checkbox colours
	colour1 = 255;
	colour2 = 255;
	colour3 = 255;
	colour4 = 255;
	colour5 = 255;
}

function draw() {
	background(255);

	//box 1
	fill(colour1);
	rect(50,50,boxSize,boxSize,boxRounding);

	//box 2
	fill(colour2);
	rect(50,150,boxSize,boxSize,boxRounding);

	//box 3
	fill(colour3);
	rect(50,250,boxSize,boxSize,boxRounding);

	//box 4
	fill(colour4);
	rect(50,350,boxSize,boxSize,boxRounding);


	//box 5
	fill(colour5);
	rect(50,450,boxSize,boxSize,boxRounding);
	
  }

  function touchEnded() {
  	//box1
  	if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100) {
  		if (colour1 == 0) {
  			colour1 = 255;
  		} else {
  			colour1 = 0;
  		}
  	}
  	//box2
  	if (mouseX > 50 && mouseX < 100 && mouseY > 150 && mouseY < 200) {
  		if (colour2 == 0) {
  			colour2 = 255;
  		} else {
  			colour2 = 0;
  		}
  	}
  	//box3
  	if (mouseX > 50 && mouseX < 100 && mouseY > 250 && mouseY < 300) {
  		if (colour3 == 0) {
  			colour3 = 255;
  		} else {
  			colour3 = 0;
  		}
  	}
  	//box4
  	if (mouseX > 50 && mouseX < 100 && mouseY > 350 && mouseY < 400) {
  		if (colour4 == 0) {
  			colour4 = 255;
  		} else {
  			colour4 = 0;
  		}
  	}
  	//box5
  	if (mouseX > 50 && mouseX < 100 && mouseY > 450 && mouseY < 500) {
  		if (colour5 == 0) {
  			colour5 = 255;
  		} else {
  			colour5 = 0;
  		}
  	}
  }