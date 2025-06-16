// 1.სტუდენტი
class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }


  set age(newAge) {
    this._age = newAge;
  }
}
const student1 = new Student("ლუკა", 16);

console.log(student1.name);
console.log(student1.age);

student1.name = "გიორგი";
student1.age = 17;

console.log(student1.name); 
console.log(student1.age); 


// 2.წიგნი
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
