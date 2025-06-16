// 1.მასივის დესტრუქტურიზაცია

let colors = ["red", "green", "blue","yellow","purple"]

let [firstColor,secondColor,...rest] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(rest)

// 2.ობიექტის დესტრუქტურიზაცია

let obj = {
    name:"Luka",
    age:"16",
    country:"Georgia"
};

let {name,country} = obj;

console.log(name)
console.log(country)

// 3.დესტრუქტურიზაცია ცვლადების სახელის შეცვლით

let xinklisRecepti = {
    author:"pavle pavleshvili",
    book:"moxveuli"
}

let {author:authorName,book:bookName} = xinklisRecepti

console.log(authorName);
console.log(bookName);

// 4.ნესტირებული ობიექტის დესტრუქტურიზაცია

let person = {
    address:"planeta marsis merve chixi",
    city:"elon maskas saxelobis",
    postal:"6969",
    elon:{
        name1:"elon",
        lastName:"musk",
    }
}

let {elon: {name1,lastName} ,city} = person;
console.log(name1)
console.log(lastName)

// 5.დესტრუქტურიზაცია ფუნქციის არგუმენტში

function car({model,year}){
    return `This car is ${model}, released in ${year}`;
}

let thisCar = {model:"BMW E34",year:"1988"}

console.log(car(thisCar));
