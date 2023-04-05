//***Second Quest Picture***/
let droppableLockSecond = null;

const picture = document.getElementById("picture");
const keyPicture = document.getElementById("key-picture"); 
const secondLock = document.getElementById("lock-3"); 

const movePicture = () => {    
    if (picture.src.match("closed")) {
        picture.src = "images/picture-openned.png";
        keyPicture.style.opacity = state.keySecond ? 0 : 1;
    } else {
        picture.src = "images/picture-closed.png";
    }
}


keyPicture.onmousedown = (event)=> {
    document.body.append(keyPicture);
  
    const moveAt = (pageX, pageY) => {
        keyPicture.style.left = pageX - keyPicture.offsetWidth / 2 + 'px';
        keyPicture.style.top = pageY - keyPicture.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    const onMouseMove = (event) => {
      moveAt(event.pageX, event.pageY);

      keyPicture.hidden = true;
      const elemBelow = document.elementFromPoint(event.clientX, event.clientY);;
      keyPicture.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.lock-3-droppable');
      if (droppableLockSecond != droppableBelow) {
        droppableLockSecond = droppableBelow;
        if (droppableLockSecond) { 
          enterDroppable(droppableLockSecond);
        }
      }
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    keyPicture.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      keyPicture.onmouseup = null;
    };

    const enterDroppable = (elem) => {
        elem.style.opacity = 1;
        keyPicture.style.opacity = 0; 
        secondLock.src = "images/lock-openned.png";
        state.keySecond = true;
      }
    
    keyPicture.ondragstart = () => {
        return false;
      };
  };