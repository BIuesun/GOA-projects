let inputTextForm = document.getElementById("message");
let inputNumberForm = document.getElementById("inputNumber");
let textOutput = document.getElementById("outPut");
let intervalId;
function send(){
    clearInterval(intervalId);
    let inputText =inputNumberForm.value;
    let inputInterval = parseInt(inputNumberForm.value , 10);

    intervalId = setInterval(function(){
        textOutput.textContent = inputText;

}, inputInterval);
}