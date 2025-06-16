// 1.მოცემულია მომხმარებლების მასივი, სადაც თითოეულ მომხმარებელს აქვს firstName და lastName. გამოიყენე map, რათა შექმნა მასივი "სრული სახელი" ფორმატით:

const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];


let fullName = users.map(name => `${name.firstName}  ${name.lastName}`);
console.log(fullName)


// 2.მოცემულია სტუდენტების მასივი. თითო სტუდენტს აქვს სახელი და ქულა. გამოიყენე filter, რათა დააბრუნო მხოლოდ ისინი, ვისი ქულაც 90-ზე მეტია:

const students = [
  { name: "Nika", score: 85 },
  { name: "Lika", score: 92 },
  { name: "Saba", score: 88 },
  { name: "Tako", score: 95 }
];

let passedScore = students.filter(grade => grade.score > 90);
console.log(passedScore);


// 3.მოცემულია კალათის ნივთების მასივი, სადაც თითოეულ ელემენტს აქვს price და quantity. გამოიყენე reduce, რათა დათვალო კალათის საერთო ღირებულება:

const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 }
];

let fullPrice = cart.reduce((accum,curr) => accum += curr.price * curr.quantity,0)
console.log(fullPrice)