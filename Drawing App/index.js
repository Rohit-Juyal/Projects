const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const updateSize = document.getElementById("updateSize");
const colorEl = document.getElementById("color");
const clear = document.getElementById("clear");

let size = 2;

let x = undefined;
let y = undefined;

let isPressed = false;
let color = "black"


canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener("mouseup", () => {
    isPressed = false;
    
    x = undefined;
    y = undefined
})
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x1 = e.offsetX;
        const y1 = e.offsetY;
        drawCircle(x1, y1);
        drawLine(x, y, x1, y1);
        x = x1;
        y = y1;
    }
})

document.body.addEventListener("mouseup", (e) => {
    console.log(e);
    isPressed = false;
})

function drawCircle(x, y) {
    ctx.beginPath();

    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x, y, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.lineWidth = size * 2;
    ctx.strokeStyle = color
    ctx.stroke();
}


increaseBtn.addEventListener("click", () => {
    size = size + 2;

    if (size > 40) {
        size = 40;
    }

    updateSizeOnScreen();
})

decreaseBtn.addEventListener("click", () => {
    size = size - 2;
    if (size < 2) {
        size = 2;
    }

    updateSizeOnScreen()
})

function updateSizeOnScreen() {
    updateSize.innerText = size
}

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
})

clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})