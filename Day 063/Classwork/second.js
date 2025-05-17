let counter = 0; 
let cookiesPerClick = 1;
let nextThreshold = 100;

const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("counter-display");

function updateCounter() {
    counter += cookiesPerClick; 
    counterDisplay.textContent = counter;

    while (counter >= nextThreshold) {
        cookiesPerClick *= 2;
        nextThreshold += 100;
    }
}

cookie.onclick = updateCounter; 
