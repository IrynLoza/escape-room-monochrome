const computerScreen = document.getElementById("computer-screen");
const match = computerScreen.src.match("off")

if (lockOne && lockTwo && lockThree) {
    computerScreen.src = "images/screen-on.png"
}