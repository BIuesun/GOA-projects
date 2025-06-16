// 1. გადმოგეცემათ array - ["Goa", "novatori", "step", "step"], თქვენი დავალებაა გადაუყვეთ array-ს map ფუნქციით და იმ მნიშვნელობების ნაცვლად რომელიც დიდი ასოთი იწყება ჩასვათ "Good", ხოლო პატარა ასოს შემთხვევაში "Bad". : D

let array = ["Goa", "novatori", "step", "step"];
let new_array = array.map(capital =>{
    return capital[0] === capital[0].toUpperCase() ? "good" : "bad";
});

console.log(new_array)

// 2. მოცემულია რიცხვების მასივი - [11, 3, 1, 5, 6, 2, 0, 13]. გამოიყენეთ filter(), რომ დატოვოთ მხოლოდ 5-ზე მეტი რიცხვები.
let nums = [11, 3, 1, 5, 6, 2, 0, 13];
let newNums = nums.filter(num => num > 5);
console.log(newNums);

// 3. მოცემულია სტრინგების მასივი. გამოიყენე reduce(), რომ მოახდინო მათში კონკატენაცია (შეერთება).
const words = ["hello", " ", "sup", " ", "random"];

const result = words.reduce((acc, curr) => acc + curr, "");

console.log(result);
