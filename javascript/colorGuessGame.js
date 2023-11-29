let numberCircle = 9;
let colors = [];
let pickedColor;
let circle = document.querySelectorAll(".circle");
let messageDisplay = document.getElementById("message");

function doColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRandomColors() {
    let arr = [];
    for (let i = 0; i < numberCircle; i++) {
        arr.push(doColor());
    }
    return arr;
}

function chooseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color) {
    for(let i = 0; i < numberCircle; i++) {
        circle[i].style.backgroundColor = color;
    }
}

function createCircle() {
    for (let i = 0; i < numberCircle; i++) {
        circle[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
            }
            else {
                this.style.backgroundColor = "rgb(37,35,35)";
                messageDisplay.textContent = "try again";
            }
        });
    }
}
createCircle();

function reset() {
    colors = getRandomColors(numberCircle);
    pickedColor = chooseColor();
    for (let i = 0; i < numberCircle; i++) {
        if(colors[i])
            circle[i].style.backgroundColor = colors[i];
    }
}
reset();
function replay(){
    window.location.reload();
}