const hours = document.getElementById("hourP");
const minutes = document.getElementById("minuteP");
const seconds = document.getElementById("secondP");

let intervalID = setInterval(function() {
    let currentDate = new Date();
    hours.textContent = currentDate.getHours();
    minutes.textContent = currentDate.getMinutes();
    seconds.textContent = currentDate.getSeconds();
}, 1000)