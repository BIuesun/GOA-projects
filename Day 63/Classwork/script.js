let count = 0;

const counterDisplay = document.getElementById("counter-display");
const stepInput = document.getElementById("step-input");

function updateCounterDisplay() {
    counterDisplay.textContent = count;

    if (count < 0) {
        counterDisplay.style.color = "red"; 
    } else if (count > 0) {
        counterDisplay.style.color = "green";
    } else {
        counterDisplay.style.color = "black";
    }
}

function increment() {
    const step = parseInt(stepInput.value, 10); // stepis values gageba
    count += step; // Incrementacia stepit
    updateCounterDisplay();
}

function decrement() {
    const step = parseInt(stepInput.value, 10); // stepis value
    count -= step; // Decrementacia stepit
    updateCounterDisplay();
}

function reset() {
    count = 0;
    updateCounterDisplay();
}

updateCounterDisplay();
