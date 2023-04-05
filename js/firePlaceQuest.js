//***First Quest Firaplace***/
let currentDroppable = null;


const fireplaceDoor = document.getElementById("fireplace-door");
const matches = document.getElementById("matches"); 
const firstLock = document.getElementById("lock-2");

const movefireplaceDoor = () => {    
    if (fireplaceDoor.src.match("closed")) {
        fireplaceDoor.src = "images/openned-fireplace-door.png";
        matches.style.opacity = state.fire ? 0 : 1;
    } else {
        fireplaceDoor.src = "images/closed-fireplace-door.png";
        matches.style.opacity = 0
    }
}

matches.onmousedown = (event)=> {
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(matches);
  
    // centers the matches at (pageX, pageY) coordinates
    const moveAt = (pageX, pageY) => {
      matches.style.left = pageX - matches.offsetWidth / 2 + 'px';
      matches.style.top = pageY - matches.offsetHeight / 2 + 'px';
    }
  
    // move matches under the pointer
    moveAt(event.pageX, event.pageY);
  
    const onMouseMove = (event) => {
      moveAt(event.pageX, event.pageY);

      matches.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);;
      matches.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.fire-droppable');
      if (currentDroppable != droppableBelow) {
        // if (currentDroppable) { // null when we were not over a droppable before this event
        //   leaveDroppable(currentDroppable);
        // }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // null if we're not coming over a droppable now
          // (maybe just left the droppable)
          enterDroppable(currentDroppable);
        }
      }
    }
  
    // move the matches on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the matches, remove unneeded handlers
    matches.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      matches.onmouseup = null;
    };

    const enterDroppable = (elem) => {
        elem.style.opacity = 1;
        matches.style.opacity = 0; 
        firstLock.src = "images/lock-openned.png";
        state.fire = true
      }
    
    matches.ondragstart = () => {
        return false;
      };
  };