// this is javascript
console.log("Hello World!!!");

var container = document.getElementById("main-container");

container.style.width = "100px";
container.style.height = "100px";
container.style.backgroundColor = "black";

// classes are plural "Elements"
var boxes = document.getElementsByClassName("box");
console.log(boxes);

for(var i =0; i<boxes.length; i++){
		boxes[i].style.width = "30px";
		boxes[i].style.height = "30px";
		boxes[i].style.backgroundColor = "red";
}

var red = true;

function changeStuff(){
	if(red){
		for(var i = 0; i < boxes.length; i++){
			boxes[i].style.width = "30px";
			boxes[i].style.height = "80px";
			boxes[i].style.backgroundColor = "blue";
			boxes[i].style.marginLeft = "10px";
		} red=false;
	} else {
		for(var i = 0; i < boxes.length; i++){
			boxes[i].style.width = "30px";
			boxes[i].style.height = "30px";
			boxes[i].style.backgroundColor = "red";
		} red=true;
	}
}