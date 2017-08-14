/** * Created by dylan on 5/3/2017.*/
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener('DOMContentLoaded', function() {
    // alert("Ready!");
    var topNav = document.getElementById("myTopnav");
    topNav.innerHTML += "<a href='index.html'>Home</a>";
    topNav.innerHTML += "<a href='about.html'>About</a>";
    topNav.innerHTML += "<a href='things.html'>Things</a>";
    topNav.innerHTML += "<a href='stuff.html'>Stuff</a>";
    topNav.innerHTML += "<a href='contact.html'>Contact</a>";

    var sideNav = document.getElementById("mySidenav");
    sideNav.innerHTML += "<a href='about.html'>About</a>";
    sideNav.innerHTML += "<a href='things.html'>Things</a>";
    sideNav.innerHTML += "<a href='stuff.html'>Stuff</a>";
    sideNav.innerHTML += "<a href='contact.html'>Contact</a>";
    sideNav.innerHTML += "<a href='index.html'>Home</a>";
}, false);