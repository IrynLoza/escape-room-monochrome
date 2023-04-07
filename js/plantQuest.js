const note = document.getElementById("plant-note");
const noteLayer = document.getElementById("plant-note-zoom-layer"); 
const zoomNote = document.getElementById("plant-note-zoom");
const noteClose = document.getElementById("plant-note-close");
const thirdLock = document.getElementById("lock-4");

const openNote = () => {  
    note.src = "images/plant-note-used.png";  
    noteLayer.style.opacity = 0.25
    noteLayer.style.visibility = "visible"
    zoomNote.style.opacity = 1
    zoomNote.style.visibility = "visible"
    noteClose.style.opacity = 1
    noteClose.style.visibility = "visible"
    state.note = true
    thirdLock.src = "images/lock-openned.png"; 
}

const closeNote = () => {
    if (state.note) {
        noteLayer.style.opacity = 0
        noteLayer.style.visibility = "hidden"
        zoomNote.style.opacity = 0
        zoomNote.style.visibility = "hidden"
        noteClose.style.opacity = 0
        noteClose.style.visibility = "hidden"
        state.note = false
    }
}

