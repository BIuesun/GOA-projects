// 1.შექმენი Map, რომელშიც სამი ადამიანის სახელი იქნება Key და მათი ასაკი Value, დაამატე ერთის ასაკი და წაშალე ერთ-ერთი ჩანაწერი.
let myMap = new Map();
myMap.set("luka",123);
myMap.set("guranduxti",1);
myMap.set("vigaca",34);


myMap.set("guranduxti", 2);
myMap.delete("vigaca")
console.log(myMap.get("guranduxti"));



// 2.შექმენი Map, სადაც Key იქნება წიგნის სათაური და Value იქნება ავტორი, შემდეგ for...of ციკლით დაბეჭდე ყველა წიგნი და ავტორი სტილში "Book - Author".

let Book = new Map();
Book.set("Games Of Thrones","George Martin");
Book.set("Vefxistyaosani","Shota Rustveli");
Book.set("1984","George Orwell");

for(const [title,author] of Book)console.log(`${title}-${author}`)


// 3.შექმენი class Student, რომელსაც ექნება name და grade, და დაამატე რამდენიმე სტუდენტი Map-ში, სადაც Key იქნება სტუდენტის ID, ხოლო Value — Student ობიექტი.

class Student{
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    }
}

const myMap1 = new Map();
myMap1.set("luka",123);
myMap1.set("guranduxti",1);
myMap1.set("vigaca",34);
