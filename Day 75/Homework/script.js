// 1.მანქანის კონსტრუქტორი.

function Car(brand,model,year,engineVolume){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;

    this.description = function(){
        return `This car is ${brand} model ${model},it got released in year ${year},it has engine volume of ${engineVolume}`;
    }
}
const car1 = new Car("BMW","E34",1987,"1.8-4.0");
console.log(car1.description);


// 2.წიგნის კონსტრუქტორი.

function Book(title,author,pages,year){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.pages7days = function(){
        return `You should read ${~~(this.pages / 7)} pages per day to complete it in 7 days`;
    }
}

const book1 = new Book("Crime and Punishment","Fyodor Dostoyevsky",430,1866);
console.log(book1.pages7days());

// 3.სპორტსმენის კონსტრუქტორი. პირველი მეთოდი

// function Sportsman(name, age, sport, trainingHours) {
//     this.name = name;
//     this.age = age;
//     this.sport = sport;
//     this.trainingHours = trainingHours;

//     this.growth = function() {
//         let currentWeeklyTime = this.trainingHours * 7;
//         let desiredWeeklyTime = currentWeeklyTime * 1.20;
//         let newDailyTime = desiredWeeklyTime / 7;

//         return newDailyTime;
//     }
// }

// let sportsman1 = new Sportsman("Avtandil Xinklisze", 21, "Football", 2);
// let requiredTime = sportsman1.growth();

// console.log(`${sportsman1.name} should train for ${~~(requiredTime)} hours per day to get 20% growth.`);


// 3. შემოკლებული ვერსია
function Sportsman(name, age, sport, trainingHours) {
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.trainingHours = trainingHours;

    this.growth = function() {
        let newDailyTime = this.trainingHours * 1.20;

        return newDailyTime;
    }
}

let sportsman1 = new Sportsman("Avtandil Xinklisze", 21, "Football", 2);
let requiredTime = sportsman1.growth();

console.log(`${sportsman1.name} should train for ${~~(requiredTime)} hours per day to get 20% growth.`);
