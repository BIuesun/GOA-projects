// 5 raime ricxvi
let numbers = [10, 20, 30, 40, 50];

// gaoprintva meore indexze da meotxeze
console.log("Element at index 2:", numbers[2]); // 30
console.log("Element at index 4:", numbers[4]); // 50

/////////////////////////////////////////////////////////

// carieli
let numbers2 = [];

// 10 integerit gavavsot
for (let i = 0; i < 10; i++) {
  numbers2[i] = parseInt(prompt(`Enter integer for index ${i}:`), 10);
}

// gaormageba
for (let i = 0; i < 10; i++) {
  numbers2[i] *= 2;
}

//////////////////////////////////////////////////////////


let n = parseInt(prompt("Enter the number of integers (N):"), 10);


let numbers3 = [];


for (let i = 0; i < n; i++) {
  numbers3[i] = parseInt(prompt(`Enter integer ${i + 1}:`), 10);
}


console.log("Numbers in reverse order:");
for (let i = n - 1; i >= 0; i--) {
  console.log(numbers3[i]);
}

///////////////////////////////////////////////////////////
let num = parseInt(prompt("Enter the number of integers (N):"), 10);

let numbers4 = [];


for (let i = 0; i < n; i++) {
  numbers4[i] = parseInt(prompt(`Enter integer ${i + 1}:`), 10);
}

// pirvelis da bolos gacvla
if (num > 1) {
  let temp = numbers4[0];
  numbers4[0] = numbers[num - 1];
  numbers4[num - 1] = temp;
}