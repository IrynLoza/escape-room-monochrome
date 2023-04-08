const note = document.getElementById("plant-note");
const zoomLayer = document.getElementById("zoom-layer"); 
const zoomNote = document.getElementById("plant-note-zoom");
const closeZoom = document.getElementById("plant-note-close");
const thirdLock = document.getElementById("lock-4");

const openNote = () => {  
    note.src = "images/plant-note-used.png";  
    zoomLayer.style.opacity = 0.25
    zoomLayer.style.visibility = "visible"
    zoomNote.style.opacity = 1
    zoomNote.style.visibility = "visible"
    closeZoom.style.opacity = 1
    closeZoom.style.visibility = "visible"
    state.note = true
    thirdLock.src = "images/lock-openned.png"; 
    state.increment();
}

const closeNote = () => {
    if (state.note) {
        zoomLayer.style.opacity = 0
        zoomLayer.style.visibility = "hidden"
        zoomNote.style.opacity = 0
        zoomNote.style.visibility = "hidden"
        closeZoom.style.opacity = 0
        closeZoom.style.visibility = "hidden"
        state.note = false
    }
}

