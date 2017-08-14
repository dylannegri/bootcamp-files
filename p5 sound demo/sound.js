var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;
var amp;

// function preload(){
// 	song = loadSound('pachelbel.mp3');
// }

function setup(){
	createCanvas(250,250);
	song = loadSound('pachelbel.mp3', loaded);
	//slider range from 0 to 1, start at 0.5 and increment by .01
	sliderVolume = createSlider(0, 1, 0.3, 0.01);
	sliderRate = createSlider(0, 2, 1, 0.01);
	sliderPan = createSlider(-1, 1, 0, 0.01);
	//begin visualizing here //////////////////
	amp = new p5.Amplitude();

}
function togglePlaying(){
	if(!song.isPlaying()){
		song.play();
		button.html("pause");
	} else {
		//song.stop() would cause the track to start over
		song.pause();
		button.html("play");
	}
}

function loaded(){
	console.log("loaded...");
	button = createButton("play");
	button.mousePressed(togglePlaying);
}

function draw(){
	background(0);
	song.setVolume(sliderVolume.value());
	song.rate(sliderRate.value());
	song.pan(sliderPan.value());

	var vol = amp.getLevel();
	var diam = map(vol, 0, 1, 30, 800);

	fill(255,0,255);
	ellipse(width / 2, height / 2, diam, diam);
}

