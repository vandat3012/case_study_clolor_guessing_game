let numberCircle = 9;
let colors;
let pickedColor;
let circle = document.querySelectorAll(".circle");
let messageDisplay = document.getElementById("message");
let numberPick;
function doColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
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
            if (numberPick > 0) {
                let clickedColor = this.style.backgroundColor;
                if(clickedColor === pickedColor) {
                    messageDisplay.textContent = "Correct!!!!!!!!! You loaded it for the first time, right?" ;
                    changeColors(pickedColor);
                }
                else {
                    this.style.backgroundColor = "rgba(255,255,255,0.91)";
                    numberPick--;
                    if (numberPick === 0) {
                        messageDisplay.textContent = " Do you want to wash your hands again? "
                    } else {
                        messageDisplay.textContent = "Try again! " + " You only have " + numberPick + " turns to choose" ;
                    }
                }
            }
        });
    }
}
createCircle();

function getRandomColors() {
    let arr = [];
    for (let i = 0; i < numberCircle; i++) {
        arr.push(doColor());
    }
    return arr;
}

function reset() {
    colors = getRandomColors(numberCircle);
    pickedColor = chooseColor();
    for (let i = 0; i < numberCircle; i++) {
        if(colors[i])
            circle[i].style.backgroundColor = colors[i];
    }
}
reset();

function setDifficulty(difficulty) {
    if (difficulty === "easy") {
        numberPick = 6;
    } else if (difficulty === "hard") {
        numberPick = 4;
    }else if (difficulty === "master"){
        numberPick = 2;
    }
    reset();
}
document.getElementById("easyButton").addEventListener("click", function() {
    setDifficulty("easy");
});

document.getElementById("hardButton").addEventListener("click", function() {
    setDifficulty("hard");
});

document.getElementById("masterButton").addEventListener("click", function() {
    setDifficulty("master");
});

setDifficulty("easy");

function replay(){
    window.location.reload();
}

