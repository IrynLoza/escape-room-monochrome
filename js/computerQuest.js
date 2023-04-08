const computerScreen = document.getElementById("computer-screen");
const match = computerScreen.src.match("on");
const screenZoom = document.getElementById("screen-zoom");
const zoomClose = document.getElementById("screen-close");
const password = document.getElementById("password");
const forthLock = document.getElementById("lock-5");

const enableScreen = () => {
    computerScreen.src = "images/screen-on.png"
}

const zoomScreen = () => {  
    zoomLayer.style.opacity = 0.25
    zoomLayer.style.visibility = "visible"
    screenZoom.style.opacity = 1
    screenZoom.style.visibility = "visible"
    zoomClose.style.opacity = 1
    zoomClose.style.visibility = "visible"
    password.style.opacity = 1
    password.style.visibility = "visible"
    state.screen = true
    forthLock.src = "images/lock-openned.png"; 
}

const closeScreen = () => {
    if (state.screen) {
        zoomLayer.style.opacity = 0
        zoomLayer.style.visibility = "hidden"
        screenZoom.style.opacity = 0
        screenZoom.style.visibility = "hidden"
        zoomClose.style.opacity = 0
        zoomClose.style.visibility = "hidden"
        password.style.opacity = 0
        password.style.visibility = "hidden"
        state.screen = false
    }
}

