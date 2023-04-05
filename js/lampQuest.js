const lampSwitch = document.getElementById("lamp-switch");
const lamp = document.getElementById("lamp"); 
const wallNote = document.getElementById("wall-note"); 

const turnLamp = () => {    
    if (lamp.src.match("off")) {
        lamp.src = "images/lamp-on.png";
        wallNote.style.opacity = 1;
    } else {
        lamp.src = "images/lamp-off.png";
        wallNote.style.opacity = 0;
    }
}