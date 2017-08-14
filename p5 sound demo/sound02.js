var wave;
var button;
var playing = false;
var slider;

function setup() {
	createCanvas(100,100);

//envelope example////////////////////////
	env = new p5.Env();
	//attack decay sustain release
	env.setADSR(.1, .1, .5, .1);
	env.setRange(1.2, 0);
/////////////////////////////////////////
	wave = new p5.Oscillator();
	wave.setType('sine');
	wave.start();
	wave.freq(440);
	//wave.amp(0); 
	wave.amp(env); 

	//440 hrz is an "A" note
	slider = createSlider(100, 1200, 440);

	button = createButton('play/pause');
	button.mousePressed(toggle);
}
function toggle(){
	env.play();
	// if(!playing){
	// 	wave.amp(1, 1);
	// 	playing = true;
	// } else {
	// 	wave.amp(0, 0.5);
	// 	playing = false;
	// }
}
function draw(){
	wave.freq(slider.value());

	if(playing){
		background(255, 0 ,255);
	} else {
		background(0);
	}
}

