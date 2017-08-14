//dylannegri@newschool.edu

var song;
var amp;
var button; 

var volhistory = [];

function preload (){
	song = loadSound('scream.mp3');
}

function toggleSong(){
	if(song.isPlaying()){
		song.pause();
	} else {
		song.play();
	}
}

function setup() {
	createCanvas(400,300);

	angleMode(DEGREES);

	button = createButton('toggle');
	button.mousePressed(toggleSong);

	song.play();
	amp = new p5.Amplitude();
}

function draw() {
	background(55);

	var vol = amp.getLevel();
	volhistory.push(vol); 



	// translate(width/2, height/2);
	stroke(255);
	noFill();
	beginShape();
	// for(var i = 0; i < 360; i++){
	// 	var r = map(volhistory[i], 0, 1, 10, 200);
	// 	var x = r * cos(i);
	// 	var y = r * sin(i);
	// 	vertex(x, y);
	//}
	for(var i = 0; i < volhistory.length; i++){
		var y = map(volhistory[i], 0, 1, height, 0);
		vertex(i, y);
	}
	endShape();

	if(volhistory.length > width - 20) {
		volhistory.splice(0,1);
	}

	 stroke(random(255), 0, random(255));
	 line(volhistory.length, 0, volhistory.length, height);
}