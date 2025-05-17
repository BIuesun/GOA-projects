// 6. შექმენით ორი ჩაშენებული div ელემენტი. ორივეზე დააყენეთ click მოვლენა capturing რეჟიმში. დაკლიკეთ შიდა ელემენტზე და დააკვირდით, რა თანმიმდევრობით იწერება შეტყობინებები კონსოლში.

const parentDiv = document.querySelector("#parentDiv");
const childDiv = document.querySelector("#childDiv");
const parentBtn = document.querySelector("#parentBtn");
parentDiv.addEventListener("click", (e) =>{
    console.log("parent div clicked:", e)
},true);

childDiv.addEventListener("click", (e) =>{
    console.log("child div clicked:", e)
},true);

parentBtn.addEventListener("click", (e) =>{
    console.log("child div clicked:", e)
});