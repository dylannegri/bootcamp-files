// vanilla javascript
console.log("hey");

document.addEventListener('DOMContentLoaded', function() {
    // alert("Ready!");
    var topNav = document.getElementById("myTopNav");
    topNav.innerHTML += '<a href="index.html">Home</a>';
    topNav.innerHTML += "<a href='about.html'>About</a>";
    topNav.innerHTML += "<a href='things.html'>Things</a>";
    topNav.innerHTML += "<a href='stuff.html'>Stuff</a>";
    topNav.innerHTML += "<a href='contact.html'>Contact</a>";

    var sideNav = document.getElementById("mySideNav");
    sideNav.innerHTML += '<a href="index.html">Home</a>';
    sideNav.innerHTML += "<a href='about.html'>About</a>";
    sideNav.innerHTML += "<a href='things.html'>Things</a>";
    sideNav.innerHTML += "<a href='stuff.html'>Stuff</a>";
    sideNav.innerHTML += "<a href='contact.html'>Contact</a>";
});

function openNav() {
	var mySideNav = document.getElementById("mySideNav");
		mySideNav.style.width = "100%";
}

function closeNav() {
	document.getElementById("mySideNav").style.width = "0";
}




