var song;
var button;
var sliderVolume;
var sliderRate;
var sliderPan;
var amp;

// function preload(){
// 	song = loadSound('pachelbel.mp3');
// }
function loaded(){
	console.log("loaded");
	button = createButton("play");
	button.mousePressed(togglePlaying);
	
}
function togglePlaying(){
	if(!song.isPlaying()){
		song.play();
		button.html("pause");
	} else {
		song.pause();
		button.html("play");
	}
	
}

function setup(){
	createCanvas(250,250);
	song = loadSound('pachelbel.mp3', loaded);
	//slider range from 0 to 1, start at 0.5, and increment by 0.01
	sliderVolume = createSlider(0,1,0.5,.01);
	sliderRate = createSlider(0,2, 1,.01);
	sliderPan = createSlider(-1,1,0,.01);

	amp = new p5.Amplitude();

}

function draw(){
	background(55);
	song.setVolume(sliderVolume.value());
	song.rate(sliderRate.value());
	song.pan(sliderPan.value());

	var vol = amp.getLevel();
	var diam = map(vol, 0, 1, 30, 400);


	ellipse(width / 2, height / 2, diam, diam);
}
