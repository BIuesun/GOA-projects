const inputField = document.getElementById("inputText");
const outputField = document.getElementById("outputText");
const submit = document.getElementById("submit");
const inputNumber = document.getElementById("inputNumber");

submit.addEventListener("click",function(){
    let userText = inputField.value;
    let userNumber = inputNumber.value;

    outputField.textContent = userText.repeat(userNumber);
})