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

	//box coordinates
	boxX = 50;

	box1Y = 50;
	box2Y = 350;
	box3Y = 650;
	box4Y = 950;
	box5Y = 1250;

	url = "http://207.154.197.158/preferences";
	//backend reset
	preferences = [
		{"name": "Dairy", "selected": false},
		{"name": "Gluten", "selected": false},
		{"name": "Soy", "selected": false},
		{"name": "Nuts", "selected": false},
		{"name": "Egg", "selected": false},
	];
	httpPost(url, "json", preferences, function(returnData) {console.log(returnData);}, function(error) {console.log(error)});

}

function draw() {
	//box visuals
	background(255);
	stroke(0);
	strokeWeight(1);
	fill(255);

	//text formatting
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

	//render text, 80 er differencen mellem box størrelsen og tekst størrelsen
	fill(0);
	/*
	text("DAIRY",225,box1Y+80); 
	text("GLUTEN",225,box2Y+80); 
	text("SOY",225,box3Y+80);
	text("NUTS",225,box4Y+80);
	text("EGG",225,box5Y+80);
*/
	text("VEGETARIAN",225,box1Y+80); 
	text("VEGAN",225,box2Y+80); 
	text("PESCATARIAN",225,box3Y+80);
	text("POLLOTARIAN",225,box4Y+80);
	text("HALAL",225,box5Y+80);
	//red
	stroke(255,0,0);
	//cross 1
	strokeWeight(stroke1);
	line(boxX, box1Y, boxX+boxSize, box1Y+boxSize);
	line(boxX, box1Y+boxSize, boxX+boxSize, box1Y);
	//cross 2
	strokeWeight(stroke2);
	line(boxX, box2Y, boxX+boxSize, box2Y+boxSize);
	line(boxX, box2Y+boxSize, boxX+boxSize, box2Y);
	//cross 3
	strokeWeight(stroke3);
	line(boxX, box3Y, boxX+boxSize, box3Y+boxSize);
	line(boxX, box3Y+boxSize, boxX+boxSize, box3Y);	
	//cross 4
	strokeWeight(stroke4);
	line(boxX, box4Y, boxX+boxSize, box4Y+boxSize);
	line(boxX, box4Y+boxSize, boxX+boxSize, box4Y);
	//cross 5
	strokeWeight(stroke5);
	line(boxX, box5Y, boxX+boxSize, box5Y+boxSize);
	line(boxX, box5Y+boxSize, boxX+boxSize, box5Y);
  }

  function touchEnded() {
  	//box1
  	//if touch within box 
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box1Y && mouseY < box1Y+boxSize) {
  		data = null;
  		//if not crossed, cross it, set true
  		if (stroke1 == 0) {
  			stroke1 = 10;
  			data = [{"name": "Dairy", "selected": true}];
  			
  		} else {
  			//if crossed, remove cross, set false
  			stroke1 = 0;
  			data = [{"name": "Dairy", "selected": false}];
  		}
  		//send data
  		httpPost(url, "json", data);
  	}
  	//box2
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box2Y && mouseY < box2Y+boxSize) {
  		data = null;
  		if (stroke2 == 0) {
  			stroke2 = 10;
  			data = [{"name": "Gluten", "selected": true}];
  		} else {
  			stroke2 = 0;
  			data = [{"name": "Gluten", "selected": false}];
  		}
  		httpPost(url, "json", data);
  	}
  	//box3
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box3Y && mouseY < box3Y+boxSize) {
  		data = null;
  		if (stroke3 == 0) {
  			stroke3 = 10;
  			data = [{"name": "Soy", "selected": true}];
  		} else {
  			stroke3 = 0;
  			data = [{"name": "Soy", "selected": false}];
  		}
  		httpPost(url, "json", data);
  	}
  	//box4
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box4Y && mouseY < box4Y+boxSize) {
  		data = null;
  		if (stroke4 == 0) {
  			stroke4 = 10;
  			data = [{"name": "Nuts", "selected": true}];
  		} else {
  			stroke4 = 0;
  			data = [{"name": "Nuts", "selected": false}];
  		}
  		httpPost(url, "json", data);
  	}
  	//box5
  	if (mouseX > boxX && mouseX < boxX+boxSize && mouseY > box5Y && mouseY < box5Y+boxSize) {
  		data = null;
  		if (stroke5 == 0) {
  			stroke5 = 10;
  			data = [{"name": "Egg", "selected": true}];
  		} else {
  			stroke5 = 0;
  			data = [{"name": "Egg", "selected": false}];
  		}
  		httpPost(url, "json", data);
  	}
  }

