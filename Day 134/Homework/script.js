const users = [
  {name: "Giga", age: 20, score: 50},
  {name: "Nino", age: 25, score: 80},
  {name: "Tiko", age: 22, score: 90},
];

function topScorers(users, minScore) {
  return users
    .filter(u => u.score >= minScore)
    .sort((a,b) => b.score - a.score)
    .map(u => u.name);
}

console.log(topScorers(users, 60)); 


// 2)
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); 


// 3) 
function removeFalsy(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => Boolean(value))
  );
}

console.log(removeFalsy({a: 1, b: 0, c: "", d: null, e: "Hello", f: false}));


// 4) 
function filterEvenNumbers(arr) {
  return arr.filter(n => n % 2 === 0);
}

console.log(filterEvenNumbers([1,2,3,4,5])); 


// 5)
function reverseWords(str) {
  const words = str.split(" ");
  if (words.length <= 1) return str;
  return reverseWords(words.slice(1).join(" ")) + " " + words[0];
}

console.log(reverseWords("hello world")); 

