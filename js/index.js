let lockCount = 0;

const state = {
  increment: () => {
    lockCount +=1;
    if(lockCount >= 3) {
      enableScreen();
    }
  },
};


// const openAndClose = (openObject, movingObject) => {   
//   console.log(`openObject===> ${openObject.src}`) 
//   if (openObject.src.match("closed")) {
//     openObject.src = "images/openned-fireplace-door.png";
//     console.log(`openObject===> ${movingObject.src}`) 
//     movingObject.style.opacity = state.fire ? 0 : 1;
//   } else {
//     openObject.src = "images/closed-fireplace-door.png";
//     movingObject.style.opacity = 0
//   }
// };