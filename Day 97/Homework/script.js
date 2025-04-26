const body = document.querySelector("body");
const mainDiv = document.querySelector(".main-container");
const button = document.querySelector("button");
const ageInput = document.querySelector(".age-input");
let count = 0;
button.addEventListener("click", () => {
  const input = ageInput.value.trim();
  const age = parseInt(input);

  if (!isNaN(age)) {
    mainDiv.style.background = age >= 18 ? "green" : "red";
  } else {
    mainDiv.style.background = input;
  } 

  if(count % 2 == 0){
    body.style.background = "black";
  }else{
    body.style.background = "white";
  }
  count++
});



