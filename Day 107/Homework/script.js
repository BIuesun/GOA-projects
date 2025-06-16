// 1.Map-ის გამოყენებით გადაუყევით array-ის და იმ შემთვხვევაში თუ array-ში აღმოჩნდება სტრინგი, ჩაანაცველთ იგი true-თი, სხვა შემთხვევაში false.

let array = [1, 5, "s", "4", 2];
let newArray = array.map(item => typeof item === "string");
console.log(newArray);

// 2.Filter-ის გამოყენებით გადაუყევით array-ის სადაც გამოცდის ქულები იქნება მოცემული და დააბრუნეთ მხოლოდ ის, რომელიბ 70-ზე მეტია.

let scores = [15,56,34,78,90,23,72];
let passed = scores.filter(score => score > 70);
console.log(passed);

// 3.შეეცადეთ Reduce-ის გამოყენებით დათვალოთ, თუ რამდენჯერ გვხვდება ესა-თუ-ის ელემენტი array-ში.






// Manual Map.

let testArray = [1,5,3,7,8,"32f"];

function manualMap(testArray){
    let result = [];
    for(let i = 0; i < testArray.length; i++){
        result.push(testArray[i]);
    }
    return result;
}

// Manual Reduce.

let preFilter = [1,5,3,7,8,"32f"];

function manualFilter(preFilter){
    let result = [];
    for(let i = 0; i < preFilter.length; i++){
        if(true){
            result.push(preFilter[i]);
        }
    return result;
    }
}