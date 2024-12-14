let count = 0;

const counterDisplay = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounterDisplay() {
    counterDisplay.textContent = count;  // gavanaxlot display

    if (count < 0) {
        counterDisplay.style.color = "red"; 
    } else if (count > 0) {
        counterDisplay.style.color = "green";
    } else {
        counterDisplay.style.color = "black";
    }
}


function increment() {
    count++;
    updateCounterDisplay();
}

function decrement() {
    count--; 
    updateCounterDisplay();
}

function reset() {
    count = 0;
    updateCounterDisplay(); 
}

updateCounterDisplay();