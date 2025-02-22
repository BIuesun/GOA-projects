let intervalId;
let numberField = document.getElementById("display-text");

function start(){
    clearInterval(intervalId);

    let userInput = document.getElementById("numInput");
    let intervalTime = parseInt(userInput.value, 10) || 1000;
    let i = 0;

        intervalId = setInterval(function(){
            numberField.textContent = i;
            i++
        }, intervalTime);
}


function stop(){
    clearInterval(intervalId);
    numberField.textContent = "-";
}
