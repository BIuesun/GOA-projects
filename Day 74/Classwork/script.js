// 1. შექმენით ადამიანის კონტრუქტორი, და შექმენით მისგან სამი ობიექტი, თითოეულს უნდა ჰქონდეს: სახელი, ასაკი, სიმაღლე და ID

// ადამიანის კონსტრუქტორი
function Person(name, age, height, id) {
    this.name = name;   // ადამიანის სახელი
    this.age = age;     // ასაკი
    this.height = height; // სიმაღლე სანტიმეტრებში
    this.id = id;       // ID
}

// სამი ობიექტის შექმნა
const person1 = new Person("ნიკა", 25, 175, 1);
const person2 = new Person("მარიკა", 30, 165, 2);
const person3 = new Person("გიორგი", 22, 180, 3);

// ობიექტების კონსოლზე გამოტანა
console.log(person1);
console.log(person2);
console.log(person3);

////////////////////////////////////////////////////////////////////

//2.შექმენით მანქანის კონსტრუქტორი, და შექმენით მისგან 3 ობიექტი და გამოიტანეთ ისინი, თითოეულს უნდა ქონდეს, სახელი, გამოშვების წელი, ძრავა, ცხენის ძალა და ფერი, ისევე როგორც მფლობელი ( მფლობელი უნდა იყოს ადამიანის ტიპის ობიექტი )

function Car(name, releaseDate, engine, horsePower, color, owner) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.engine = engine;
    this.horsePower = horsePower;
    this.color = color;
    this.owner = owner;
}


const car1 = new Car("BMW E34", 1988, "inline-6 or V8", "208-311", "Jet Black", person1);
const car2 = new Car("Ford Mustang GT", 1967, "V8", 225, "Acapulco Blue", person2);
const car3 = new Car("Lamborghini Diablo", 1990, "V12", 485, "Metallic Black", person3);


console.log(person1);
console.log(person2);
console.log(person3);

console.log(car1);
console.log(car2);
console.log(car3);
