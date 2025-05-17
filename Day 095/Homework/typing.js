let button = document.querySelector("#showText");
let input = document.querySelector("#userInput");
let output = document.querySelector("#output");

button.addEventListener("click", function () {
    let text = input.value;
    output.innerHTML = ""; 
    let i = 1;

    let interval = setInterval(function () {
        let current = text.slice(0, i);
        output.innerHTML += current + "<br>";
        i++;

        if (i > text.length) {
            clearInterval(interval);
        }
    }, 300);
});


