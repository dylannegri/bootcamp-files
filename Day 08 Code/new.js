document.addEventListener('DOMContentLoaded', function(e){
	console.log("js is loaded");
});

var imageNums = 15;
var curImg = 0;
var nextImg = 0;

function loadImages(){
	var columns = document.getElementByClassName('columns');
	var columnNum = column.length;

	console.log(columnNum);
	for(var i = 0; i<imageNums; i++){
		var newImg = document.createElement("img");
		newImg.src = "./images/"+i+".jpg";
		// ///////////////////////////////////////////
		newImg.id = i;

		newImg.addEventListener("click", function(e){
			console.log(e.target.id);
			popUp(e.target.id);
		}); //event

		columns[i%columnNum].appendChild(newImg);
	} // for looooooooooooooooooooop
}
function popUp(image){
	curImg = image;
	//show which image num we have clicked on
	console.log(curImg);

	var pop = document.getElementById("pic");
	pop.src = "./image/"+image+".jpg";

	pop.addEventListener("click",function(e){
		close();
	});

	var container = document.getElementById("popUp");
	container.style.display = "block";
}

function close() {
	var container = document.getElementById("popUp");
	container.style.display = "none";
}

function change(direction){
	if(direction==1){
		if (curImg==imageNums-1) {
				nextImg = 0;
		} else { 
			nextImg = ++curImg;
		} //else
	} //move right

	else if (direction==-1){
		if (curImg==0) {
			nextImg = imageNums-1;
		} else {
			nextImg = --curImg;
		} //else
	} //move left

	var pop = document.getElementById("pic");
	pop.src = "./image/"+nextImg+".jpg";

} // direction function