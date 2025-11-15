// 1.შექმენი Animal კლასი რომელსაც ექნება სახელი და ასაკი, შემდეგ გააკეთე Dog კლასი რომელიც მემკვიდრეობს Animal-სგან და დაამატე მეთოდი  bark() რომელიც აბრუნებს "Woof! მე ვარ [სახელი]".

class Animal{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    
}

class Dog extends Animal{
    constructor(name,age){
        super(name,age);
    }
    bark(){
        return `Woof i am ${name}`;
    }
}
let doggo = new Dog("revazi",12);
console.log(doggo.bark)


// 2.
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