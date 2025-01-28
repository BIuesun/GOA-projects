// 1.შექმენით ადამიანის კონტრუქტორი, და შექმენით მისგან სამი ობიექტი, თითოეულს უნდა ჰქონდეს: სახელი, ასაკი, სიმაღლე და ID
function person(name,age,height,id){
    this.name = name;
    this.age = age;
    this.height = height;
    this.id = id;
}

const person1 = new person("Sandro",16,185,1);
const person2 = new person("nika",15,189,2);
const person3 = new person("aleqsi",29,165,3);
console.log(person1);
console.log(person2);
console.log(person3);

// 2.შექმენით მანქანის კონსტრუქტორი, და შექმენით მისგან 3 ობიექტი და გამოიტანეთ ისინი, თითოეულს უნდა ქონდეს, სახელი, გამოშვების წელი, ძრავა, ცხენის ძალა და ფერი, ისევე როგორც მფლობელი ( მფლობელი უნდა იყოს ადამიანის ტიპის ობიექტი )

function car(name,releaseDate,engine,horsePower,color,owner){
    this.name = name;
    this.releaseDate = releaseDate;
    this.engine = engine;
    this.horsePower = horsePower;
    this.color = color;
    this.owner = owner;
}

const car1 = new car("Aetherion X1",2025,"V6 Hybrid",620,"Neblua Blue",person1.name);
const car2 = new car("Vulcanis Raptor",2024,"V10",780,"Volcanic Red",person2.name);
const car3 = new car("Zephyrus E9",2026,"Dual Electric Motors",950,"Arctic Silver",person3.name)
console.log(car1);
console.log(car2);
console.log(car3);