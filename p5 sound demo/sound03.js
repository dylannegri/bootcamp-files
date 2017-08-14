var song;
var amp;
var button;

var volhistory = [];

function preload(){
	song = loadSound('scream.mp3');
}
function toggleSong(){
	if(song.isPlaying()){
		song.pause();
	} else {
		song.play();
	}
}
function setup(){
	createCanvas(300,200);
	button = createButton('toggle');
	button.mousePressed(toggleSong);
	song.play();
	amp = new p5.Amplitude();
}
function draw(){
	background(0);
	var vol = amp.getLevel();
	volhistory.push(vol);
	stroke(255);
	noFill();
	beginShape();
	for(var i = 0; i < volhistory.length; i++){
		var y = map(volhistory[i], 0, .5, height, 0);
		vertex(i, y);
	}
	endShape();

	if(volhistory.length > width - 20) {
		volhistory.splice(0,1);
	}

	stroke(255, 0 , 0);
	line(volhistory.length, 0, volhistory.length, height);


	//fill(200,0,0);
	//ellipse(100, 100, 200, vol * 200);
}