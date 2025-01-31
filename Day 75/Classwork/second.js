function Animal(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
    
    this.getDescription = function() {
        return `${this.name} is a ${this.age}-year-old ${this.type}.`;
    };
}

const dog = new Animal('zawgi', 'dog', 5);
console.log(dog.getDescription());  
