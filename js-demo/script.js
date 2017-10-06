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

var item1 = true;

function changeStuff(){
	if(item1){
		document.getElementById("item1").style.display = "none";
		document.getElementById("item2").style.display = "block";
		document.getElementById("item3").style.display = "none";
		item1 = false;
	} else if (!item1) {
		document.getElementById("item1").style.display = "block";
		document.getElementById("item2").style.display = "none";
		document.getElementById("item3").style.display = "none";
		item1 = true;
	}
	document.addEventListener('click', function(){
		document.getElementById("item1").style.display = "none"
		document.getElementById("item2").style.display = "none";
		document.getElementById("item3").style.display = "block";
	});
}

	// if(red){
	// 	for(var i = 0; i < boxes.length; i++){
	// 		boxes[i].style.width = "30px";
	// 		boxes[i].style.height = "80px";
	// 		boxes[i].style.backgroundColor = "blue";
	// 		boxes[i].style.marginLeft = "10px";
	// 	} red=false;
	// } else {
	// 	for(var i = 0; i < boxes.length; i++){
	// 		boxes[i].style.width = "30px";
	// 		boxes[i].style.height = "30px";
	// 		boxes[i].style.backgroundColor = "red";
	// 	} red=true;
	// }
//}
