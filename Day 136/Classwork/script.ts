// 2)
function sayHello(name: string): string {
  return `გამარჯობა, ${name}! სასიამოვნოა შენი ნახვა.`;
}

// 3) 
function calculator(a: number, b: number): { sum: number; diff: number; mult: number } {
  return {
    sum: a + b,
    diff: a - b,
    mult: a * b,
  };
}

// 4)
function multiply(a: number, b: number = 2): number {
  return a * b;
}
// 5) შექმენი names მასივი და შეავსე 3 სახელი
let names: string[] = ["თემო", "ანა", "ლუკა"];

// 6) შექმენი numbers მასივი 5 რიცხვით
let numbers: number[] = [10, 20, 30, 40, 50];




// 
console.log(numbers);
console.log(sayHello("luka"));
console.log(calculator(10, 5));
console.log(multiply(4));
console.log(multiply(4, 3));
console.log(names);




