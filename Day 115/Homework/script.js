// 1.Temperature კლასი • აქვს celsius და fahrenheit სეტერები და გეთერები • მნიშვნელობები გამოაქვს ეკრანზე ვიზუალურად დაყოფილ ბლოკებში
class Temperature {
    constructor(celsius) {
        this._celsius = celsius; 
    }
    get celsius() {
        return this._celsius;
    }

    set celsius(temp) {
        if (typeof temp !== "number" || isNaN(temp)) {
            throw new Error("temp value isnt valid");
        }
        this._celsius = temp;
    }

    get fahrenheit() {
        return (this._celsius * 9/5) + 32; 
    }

    set fahrenheit(temp) {
        if (typeof temp !== "number" || isNaN(temp)) {
            throw new Error("temp value isnt valid");
        }
        this._celsius = (temp - 32) * 5/9;
    }

    toCelsiusString() {
        return `${this._celsius}°C`;
    }


    toFahrenheitString() {
        return `${this.fahrenheit}°F`;
    }
}

// 2.Rectangle კლასი • იღებს width-ს და height-ს სეტერებით და აბრუნებს ფართობს გეთერით • ეკრანზე გამოაქვს სიგანე, სიმაღლე და ფართობი დიზაინირებულ ელემენტებში

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    get width(){
        return this._width;
    }
    set width(value){
        if(value <= 0 || isNaN(value) || typeof value !== "number"){
            throw new Error("width parameter has wrong vlaue")
        }
        this._width = value;
    }

    get height(){
        return this._height;
    }

    set height(value){
        if(value <= 0 || isNaN(value) || typeof value !== "number"){
            throw new Error("height parameter has wrong vlaue")
        }
        this._height = value;
    }
    rectArea(){
        return this._height * this._width
    }
}

// 3.User კლასი • აქვს firstName და lastName სეტერები და გეთერით აბრუნებს fullName-ს • fullName გამოჩნდება ველზე ლამაზად გაფორმებული ტექსტით

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get firstName(){
        return this._firstname;
    }
    set firstName(name){
        if(isNaN(name) || name.length <= 0 || typeof name !== "string"){
            throw new Error("not valid firstname")
        }
        this._firstname = name;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(name){
        if(isNaN(name) || name.length <= 0 || typeof name !== "string"){
            throw new Error("not valid lastname")
        }
        this._lastName = name;
    }
    fullName(){
        return `${this._firstname} ${this._lastName}`;
    }
}