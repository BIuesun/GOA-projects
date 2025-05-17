const parentDiv = document.querySelector("#parentDiv");
const childButton = document.querySelector("#childButton");
const childDiv = document.querySelector("#childDiv");
const grandchildDiv = document.querySelector("#grandchildDiv");
// 1.შექმენით ღილაკი და მის მშობელ div-ზე დააყენეთ click მოვლენა. კონსოლში დაბეჭდეთ ორივე ელემენტზე დაკლიკებისას მომხდარი "მოვლენა".

parentDiv.addEventListener("click", (e) => {
  console.log("Parent Div Clicked:", e);
});

childButton.addEventListener("click", (e) => {
  console.log("Child Button Clicked:", e);
});


// 2. შექმენით სამი ჩაშენებული div ელემენტი. თითოეულზე დააყენეთ click მოვლენა და დააკვირდით, რა თანმიმდევრობით იწერება შეტყობინებები კონსოლში.

childDiv.addEventListener("click", (e) =>{
    console.log("Child div Clicked:", e)
} )

grandchildDiv.addEventListener("click",(e) =>{
    console.log("Grandchild div Clicked:", e);
})

// 3. დამატეთ ღილაკზე და body-ზე click მოვლენა. დააკვირდით, ორივე რეაგირებს თუ არა ღილაკის დაჭერაზე.

const body = document.querySelector("body");
const btn = document.querySelector("#bodyBtn");

body.addEventListener("click",(e) => {  // ar reagirebs body
    console.log("body clicked:" ,e);
});
btn.addEventListener("click",(e) => {
    console.log("btn clicked:", e);
});

// 4.შექმენით სამი ღილაკი ერთმანეთის შიგნით. თითოეულზე დააყენეთ click მოვლენა და დააკვირდით, როგორ იბეჭდება შეტყობინებები კონსოლში დაჭერისას.

const btn1 = document.querySelector("#firstBtn");
const btn2 = document.querySelector("#secondBtn");
const btn3 = document.querySelector("#thirdBtn");

btn1.addEventListener("click",(e) => {
    console.log("btn clicked:", e);
});
btn2.addEventListener("click",(e) => {
    console.log("btn clicked:", e);
});
btn3.addEventListener("click",(e) => {
    console.log("btn clicked:", e);
});