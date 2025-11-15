// 1.დაწერე ფუნქცია სახელად calculate, რომელიც იღებს ორ რიცხვს და ერთ ფუნქციას. ეს ფუნქცია უნდა მოახდინოს მიღებულ რიცხვებზე მოქმედება (ჯამი, გამრავლება ან სხვაობა) გადაცემული callback-ის გამოყენებით.

function calculate(callback,value1,value2){
    return callback(value1,value2)
}

function sum(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

console.log(calculate(sum,2,5));

// 2.შექმენი ფუნქცია, რომელიც იღებს მასივს და callback ფუნქციას. ამ ფუნქციის მიზანია — დააბრუნოს მხოლოდ ის ელემენტები, რომლებზეც callback აბრუნებს true.

function filteredArr(callback,arr){
    return arr.filter(callback);
}

function even(num){
    return num % 2 == 0;
}
function positive(num){
    return num > 0;
}
const numbers = [1, -2, 4, -5, 6, 7]
console.log(filteredArr(numbers, even));
console.log(filteredArray(numbers, positive)); 