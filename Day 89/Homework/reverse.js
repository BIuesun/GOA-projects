let userInput = prompt("Please enter text: ");
function reverseString(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

alert("Reversed text: " + reverseString(userInput));
