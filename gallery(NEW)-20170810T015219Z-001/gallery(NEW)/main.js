/**
 * Created by lucien on 4/27/17.
 */
//Another way of doing the array: Raname all the images in this format: "number.jpg" starting from 1.jpg
    //And then:
    // var numOfImages = 23
    // for(var i = 1; i<numOfImages; i++){
    //     var imgAddr = "./image/"+i+".jpg";
    //     var newImg = document.createElement("img");
    //     newImg.className("images");
    //     newImg.src = imgAddr;
    //     ...
    // }

    //This is the array of the images
var images = ["matthew-henry-213827.jpg",
    "aaron-burden-168408.jpg",
    "diego-hernandez-220886.jpg",
    "linda-xu-216043.jpg",
    "sylwia-bartyzel-112721.jpg",
    "kristopher-roller-188180.jpg",
    "joshua-earle-117661.jpg",
    "dmitrii-bogdanov-93092.jpg",
    "5kvpqc1uklk-ryan-wong.jpg",
    "7bimechfgfy-ben-white.jpg",
    "euroau9mx6s-teddy-kelley.jpg",
    "uo02gaw3c0c-john-towner.jpg",
    "aaexf6nxvqo-martin-jernberg.jpg",
    "h8nxgssjqxs-jonatan-pie.jpg",
    "kue5qvrhuqw-lily-lvnatikk.jpg"];

document.addEventListener("DOMContentLoaded", function (event) {
    //Checking if the js file is linked to html
    console.log("hello world");

    //Calling the function
    loadImages();
});

//Put the images in the columns in the order:1, 2, 3 ... 1, 2 ...
function loadImages() {
    //Getting the columns in html
    var columns = document.getElementsByClassName("column");
    var columnNum = columns.length;

    //putInNum means which column the next image will be put into
    var putInNum = 0;

    //Check the number of images and the number of columns
    console.log("Number of images: "+images.length);
    console.log("Number of columns: "+columns.length);

    //Use a for loop to put all the images into columns
    for(var i = 0; i<images.length; i++){
        //Create a new <img> tag
        //Load the images into a new <img> tag
        var newImg = document.createElement("img");
        newImg.className = "images";

        //Set the src attribute of the new <img> tag
        newImg.src = "./image/"+images[i];


        //Put the new <img> tag into the column[putInNum]
        columns[putInNum].appendChild(newImg);

        //Move to the next column
        putInNum++;

        //If PutInNum is bigger than the number of columns, put the next image in the first column
        //Why -1?
        //Because the index of array starts from 0
        if(putInNum>columnNum-1){
            putInNum = 0;
        }
    }
}

//Put the images in the priority of the shortest column
//OPTIONAL
//Don't want to explain
function loadImages2() {
    //Getting the columns in html
    var columns = document.getElementsByClassName("place");
    var columnNum = columns.length;
    var heightArray = [];
    var putInNum;

    for(var i = 0; i<columnNum; i++){
        heightArray.push(0);
    }

    for(var i = 0; i<images.length; i++){
        var newImg = document.createElement("img");
        newImg.className = "images";

        newImg.src = "./image/"+images[i];

        for(var j = 0; j<columnNum; j++){
            var columnHeight = columns[j].clientHeight;
            heightArray[j] = columnHeight;
        }

        putInNum = getMin(heightArray);

        //Put the new <img> tag into the column[putInNum]
        columns[putInNum].appendChild(newImg);

    }
}

function getMin(array){
    var min = array[0];
    var index = 0;
    var len = array.length;
    for (var i = 1; i < len; i++){
        if (array[i] < min){
            min = array[i];
            index = i;
        }
    }
    return index;
}