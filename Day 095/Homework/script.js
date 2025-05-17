// 1.addevent listener
let mainDiv = document.querySelector(".main-container");
let button = document.querySelector(".button");
button.addEventListener("click",addDiv);

function addDiv(){
    let newDiv = document.createElement("div");
    newDiv.style.width = "100px"
    newDiv.style.height = "100px"
    newDiv.style.background = "black"
    newDiv.style.margin = "5px"
    mainDiv.appendChild(newDiv);

}


//2.
let square = document.querySelector(".square");

square.addEventListener("click",function(){
    square.style.borderRadius = "50%";

    setTimeout(function(){
        square.style.borderRadius = "0%"
    },1000)
})

// 3.

let box = document.querySelector(".box");
let interval = prompt("please enter inteval");
interval = parseInt(interval);

let step = 0;
setInterval(() => {
    if (step === 0) box.style.top = "100px";  
    else if (step === 1) box.style.top = "200px";
    else if (step === 2) box.style.left = "300px";
    else if (step === 3) box.style.left = "200px";

    step = (step + 1) % 4;
}, interval);


