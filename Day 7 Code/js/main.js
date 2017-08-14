console.log("HELLO WORLD");

document.getElementById("main-container").style.width = "500px";
document.getElementById("main-container").style.height = "500px";
document.getElementById("main-container").style.backgroundColor = "black";

var boxes = document.getElementsByClassName("box");
console.log(boxes);

for(var i = 0; i<boxes.length; i++){
	boxes[i].style.width = "30px";
	boxes[i].style.height = "30px";
	boxes[i].style.background = "red";
}

var red = true;

function whatever(){
	if(red){
		for(var i = 0; i<boxes.length; i++){
			boxes[i].style.width = "30px";
			boxes[i].style.height = "80px";
			boxes[i].style.background = "blue";
		}
		red=false;
	}else{
		for(var i = 0; i<boxes.length; i++){
			boxes[i].style.height = "30px";
			boxes[i].style.width = "80px";
			boxes[i].style.background = "red";
		}
		red=true;
	}
}




