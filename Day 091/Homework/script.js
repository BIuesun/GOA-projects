// 1.დაატრიალეთ ციკლი ათჯერ და ყოველ ჯერზე ჩასვით ახალი div container-ის (სხვადასხვა bg ფერით)თავში შემდეგ ბოლოში ( ჩანაცვლებით )
let main = document.querySelector("main");
let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"];

for (let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.style.width = `${i * 20}px`;
    div.style.height = `${i * 20}px`;
    div.style.background = colors[i - 1]; // სხვადასხვა ფონის ფერები
    div.textContent = `Div ${i}`;

    if (i % 2 === 0) {
        main.append(div); // ლუწი შემთხვევაში ბოლოში ვამატებთ
    } else {
        main.prepend(div); // კენტ შემთხვევაში თავში ვამატებთ
    }
}
// 2.შექმენით missions list, როდესაც მომხარებელი დააჭერს ღილაკს, კონტეინერის თავში დაემატოს მის მიერ შეყვანილი მნიშვნელობა
let container = document.querySelector(".container");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let userInput = prompt("Enter a mission:");
    if (userInput) {
        let div = document.createElement("div");
        div.textContent = userInput;
        container.prepend(div);
    }
});

// 3.თუ მომხმარებლის მიერ შემოტანილი რიცხვი მეტი იქნება 20-ზე, დაემატოს იგივე რიცხვი კონტეინერის ბოლოში, თუ რიცხი ნაკლები იქნება, შესაბამისად დაემატოს თავში
function moreThan() {
    let userInput = prompt("Please enter a number:");
    let num = parseInt(userInput);
        if (num > 20) {
            main.append(div);
        } else {
            main.prepend(div);
        }
    }

// 4მომხმარებლის მიერ შემოტანილი რიცხვი თუ ბოლოვდება 1-ზე, კონტეინერის ბოლოში დაამატეთ წითელი ფერის კვარდატი, თუ 2-ზე მწვანე, თუ 3-ზე ლურჯი და ა.შ..

function coloredDivs(){
    function coloredDivs() {
        let userNum = prompt("Please enter a digit (1-9):");
        let num = parseInt(userNum) % 10;
        let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "gray", "black"];
        
        if (!isNaN(num)) {
            let div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.background = colors[num - 1];
            main.append(div);
        }
    }
}
// 5.თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის ლუწი, კონტეინერის ბოლოში დაამეტეთ ლურჯი წრე, თუ კენტია თავში დაამატეთ წითელი კვადრატი

function redBlue(){
    let userColor = prompt("Please enter number: ");
    if(parseInt(userColor) % 2 == 0){
        let blueD = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.background = "blue";
        main.append(blueD);
    }else{
        let redD = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.background = "red";
        main.append(redD);
    }
}