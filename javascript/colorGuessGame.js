let numberCircle = 9;
let colors = [];
let pickedColor;
let circle = document.querySelectorAll(".circle");
let messageDisplay = document.getElementById("message");
let numberPick;

//Hàm tạo màu sắc ngẫu nhiên
function doColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    messageDisplay.textContent = `R,G,B = ${r},${g},${b} `;
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Hàm chọn màu sắc từ mảng colors
function chooseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
// Hàm thay đổi màu sắc các vòng tròn
function changeColors(color) {
    for(let i = 0; i < numberCircle; i++) {
        circle[i].style.backgroundColor = color;
    }
}

//Hàm tạo sự kiện khi click vào vòng tròn
function createCircle() {
    for (let i = 0; i < numberCircle; i++) {
        circle[i].addEventListener("click", function() {
            if (numberPick > 0) {
                let clickedColor = this.style.backgroundColor;
                if(clickedColor === pickedColor) {
                    messageDisplay.textContent = "Xin chúc mừng bạn đã lựa chọn đúng" ;
                    changeColors(pickedColor);
                }
                else {
                    this.style.backgroundColor = "rgb(255,255,255)";
                    numberPick--;
                    if (numberPick === 0) {
                        messageDisplay.textContent = " Bạn đã hết lần lựa chọn "
                    } else {
                        messageDisplay.textContent = "Tiếp tục, " + " Bạn còn " + numberPick + " lần chọn" ;
                    }
                }
            }
        });
    }
}
createCircle();

// Hàm tạo mảng màu sắc ngẫu nhiên cho các vòng tròn
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

// Hàm thiết lập độ khó
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


