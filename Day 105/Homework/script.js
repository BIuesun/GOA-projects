let inputArea = document.querySelector("input");
let submit = document.querySelector("form");
let backgroundChanger = document.querySelector("#backgroundChanger");
let body = document.querySelector("body");

inputArea.addEventListener("input",()=>{
    body.style.background = "black";
})

submit.addEventListener("submit",(e)=>{
    e.preventDefault()
    body.style.background = "green";
})

backgroundChanger.addEventListener("click",()=>{
    body.style.background = "white";
})