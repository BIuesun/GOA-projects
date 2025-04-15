let mainDiv = document.getElementById("main-container");

function divCreation(n) {
  for (let i = 0; i < n; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerText = "Child" + i;
    newDiv.style.background = "black";
    newDiv.style.color = "white";
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.margin = "5px";
    mainDiv.appendChild(newDiv);
  }
}

// 1.შექმენით div რამოდენიმე child-ით და მიანიჭეთ bg color-იმ child-ს რომელსაც მომხმარებელი ისურვებს, მაგალითად თუ შექმენით div ოთხი child-ით და მომხმარბელმა შემოიტანა რიცხვი 3, გასტილეთ child[3]

function backgroundColor(clr, num) {
  mainDiv.children[num].style.backgroundColor = clr;
}

divCreation(5);
backgroundColor("red", 3);

// 2.მოცემულია სამი div, წინა დავალების პრინციპით (მომხმარებლის ნებით) აარჩევინეთ რომელიმე div, და შეამოწმეთ, თუ მასში არის კიდევ ერთი ელემენტი, ანუ child ან თუნდაც ტექსტი, გამოიტანეთ alert "This Div has child" ან ნებისმიერი სხვა ტექსტი
function checkChild(num){
    if(mainDiv.children[num].hasChildNodes() === true){
        alert(`div on index ${num} has a child`)
    }else{
        alert(`div on index ${num} does not have a child`)
    }
    
}

// checkChild(4)

// 3.გასტილეთ ნებისმიერი კონტეინერის ყველა child სხვადასხვა ფერით, child[n] (სადაც n ნებისმიერი რიცხვია) და ასევე for loop-ის გამოყენებით

const randomColors = [
    "blue", "green", "red", "yellow", "orange",
    "purple", "pink", "brown", "grey", "black"
  ];
  
  function randomBackgrounds(clr) {
    for (let i = 0; i < mainDiv.children.length; i++) {
      mainDiv.children[i].style.background = clr[i];
    }
  }
  
window.onload = function() {
    randomBackgrounds(randomColors);
  };
  

// 4.შექმენით ერთი div, რომელშიც რამდენიმე p ელემენტია. ღილაკზე დაჭერისას პირველი p (ანუ children[0]) გახდება წითელი ფერის.

let button = document.querySelector(".button");

button.addEventListener("click",function() {
    mainDiv.children[0].style.background = "red";
})