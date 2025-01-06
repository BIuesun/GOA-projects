// 1. შექმენით ფუნქცია რომელიც მომხმარებელს შეაყვანინებს ტექსტს, თუ მომხმარებელს ეს ტექსტი უკვე შეყვანილი ექნება მირჩეს პროგრამა 

function Norepeat(){
    let array = [];
    let bool = true;
    while(bool){
        let userInput = prompt("Please enter text: ")
        for(let i = 0; i < array.length; i++){
            if(array[i] === userInput){
                bool = false;
                break;
            }
        }
        array.push(userInput);
    }

}

