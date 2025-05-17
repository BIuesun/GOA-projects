function person(name, age, height, id) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.id = id;
}

const person1 = new person("Sandro", 16, 185, 1);
const person2 = new person("Nika", 15, 189, 2);
const person3 = new person("Aleqsi", 29, 165, 3);

console.log(person1);
console.log(person2);
console.log(person3);

function car(name, releaseDate, engine, horsePower, color, owner) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.engine = engine;
    this.horsePower = horsePower;
    this.color = color;
    this.owner = owner;
}

const car1 = new car("Aetherion X1", 2025, "V6 Hybrid", 620, "Nebula Blue", person1.name);
const car2 = new car("Vulcanis Raptor", 2024, "V10", 780, "Volcanic Red", person2.name);
const car3 = new car("Zephyrus E9", 2026, "Dual Electric Motors", 950, "Arctic Silver", person3.name);

console.log(car1);
console.log(car2);
console.log(car3);


function animal(name, species, age, owner) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.owner = owner; 
}

const animal1 = new animal("Max", "Dog", 5, person1.name);
const animal2 = new animal("Whiskers", "Cat", 3, person2.name);
const animal3 = new animal("Snowy", "Rabbit", 2, person3.name);

console.log(animal1);
console.log(animal2);
console.log(animal3);
