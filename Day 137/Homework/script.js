function sumEvenOdd(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  return { evenSum, oddSum };
}
console.log(sumEvenOdd([1,2,3,4,5])); 




function countUniqueWords(str) {
  let words = str.toLowerCase().split(/\s+/);
  let unique = new Set(words);
  return unique.size;
}

console.log(countUniqueWords("Hello hello world world test"));




function longestWord(text) {
  let words = text.split(/\s+/);
  let longest = "";

  for (let w of words) {
    if (w.length > longest.length) {
      longest = w;
    }
  }

  return longest;
}

console.log(longestWord("I love programming in JavaScript"));



function arrayDifference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}


console.log(arrayDifference([1,2,3,4], [2,4]));


function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}


console.log(isPalindrome("Racecar")); 





