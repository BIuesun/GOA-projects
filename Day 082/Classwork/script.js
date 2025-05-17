let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervalId; 

function start() {
    clearInterval(intervalId);

    intervalId = setInterval(function() {
        if (document.getElementById("letters").checked) {
            let randomLetter = letters[Math.floor(Math.random() * letters.length)];
            document.getElementById("output").textContent = randomLetter;
        } 
        if (document.getElementById("numbers").checked) {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            document.getElementById("output").textContent = randomNumber;
        }
    }, 1000);
}

function stop() {
    clearInterval(intervalId);
}
