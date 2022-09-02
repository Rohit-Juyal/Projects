const pink = document.getElementById("pink");
const container = document.getElementById("container"); 
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const formContent = document.querySelectorAll(".formContent");
const formLabel = document.querySelectorAll(".formLabel");
const formInput = document.querySelectorAll(".formInput");


pink.addEventListener("click", () => {
    container.style.backgroundColor = "rgb(235, 138, 177)";
    document.body.style.backgroundColor = "lightpink";
    for(let i = 0; i < formContent.length; i++) {
        formContent[i].style.backgroundColor ="#rgb(207, 38, 78)"
        formLabel[i].style.backgroundColor = "rgb(105, 2, 2)";
    }   
})

red.addEventListener("click", () => {
    container.style.backgroundColor = "#b33f32";
    document.body.style.backgroundColor = "#E04961";
    for(let i = 0; i < formContent.length; i++) {
        formContent[i].style.backgroundColor ="#E04961"
        formLabel[i].style.backgroundColor = "#b82121";
    }   
})

blue.addEventListener("click", () => {
    container.style.backgroundColor = "blue";
    document.body.style.backgroundColor = "lightblue";
    for(let i = 0; i < formContent.length; i++) {
        formContent[i].style.backgroundColor ="#6a8fde"
        formLabel[i].style.backgroundColor = "#201d54";
    }    
})

yellow.addEventListener("click", () => {
    container.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "#FAFE7D";
    for(let i = 0; i < formContent.length; i++) {
        formContent[i].style.backgroundColor ="#edae40"
        formLabel[i].style.backgroundColor = "#c98002";
    }   
})

green.addEventListener("click", () => {
    container.style.backgroundColor = "green";
    document.body.style.backgroundColor = "lightgreen";
    for(let i = 0; i < formContent.length; i++) {
        formContent[i].style.backgroundColor ="#235221";
        formLabel[i].style.backgroundColor = "#0a3608";
    }   
})
