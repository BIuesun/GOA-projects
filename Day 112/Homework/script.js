// 1.დავალება 1: შექმენი კლასი "Person"
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        introduce(){
            return `i am ${this.name}, ${this.age} years old`
        }
    }
let person1 = new Person("Gerald",102);
console.log(person1.introduce())


// 2.დავალება 2: შექმენი კალკულატორის კლასი

    class Calculator{
        constructor(a,b){
            this.a = a;
            this.b = b;
        }
        add(a,b){
            return this.a + this.b;
        }
        subtract(a,b){
            return this.a - this.b;
        }
        multiply(a,b){
            return this.a * this.b;
        }
        divide(a,b){
            if(this.a == 0 || this.b == 0){
                return "cant divide by zero";
            }else{
                return this.a / this.b;
            }
   
        }
    }
    let example1 = new Calculator(3,5);
    console.log(example1.multiply())

// დავალება 3: წიგნის ბიბლიოთეკა

    class Book{
        constructor(title,author){
            this.title = title;
            this.author = author;
        }
    }
    class Library{
        constructor(books = []){
            this.books = books;
        }
        addBook(book){
            this.books.push(book);
        }
        listBooks(){
            return this.books.forEach(book =>{
                console.log(`title: ${book.title}, author: ${book.author}`);
            })
        }
    }
let book1 = new Book("Vefxistyaosani","Shota Rustveli");
let book2 = new Book("Didostatis Marjvena", "Contantine Gamsakhurdia");
let library = new Library([book1]);
library.addBook(book2);
library.listBooks();

// დავალება 4: მემკვიდრეობა — ცხოველები

class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        
    }
}