// 1.მოცემულია რიცხვების სია, დააბრუნე ახალი სია, სადაც თითოეული რიცხვი ორმაგდება lambda და map-ით.

function twice(arr){
    let result = [];
    result.push(arr.map(num => num * 2));
    return result;
}

console.log(twice([1,3,4,56,8]));

// 2.მოცემულია რიცხვების სია, დააბრუნე მხოლოდ კენტები lambda და filter-ით.

function odds(arr){
    return arr.filter(num => num % 2 !== 0);
}

console.log(odds([12,3,4,5,6,1,2]));

// 3.მოცემულია სიტყვების სია, დააბრუნე ყველა სიტყვა დიდი ასოებით lambda და map-ით.

function upper(words){
    return words.map(word => word.toUpperCase());
}
console.log(upper(["hello","sup","bye"]));


// 4.მოცემულია სიტყვების სია, დააბრუნე მხოლოდ ის სიტყვები, რომელთა სიგრძე 5-ზე მეტია lambda და filter-ით.

function longerthanfive(words){
    return words.filter(word => word.length > 5 );
}
console.log(longerthanfive(["hello","sup","bye","defomorethan5"]));

// 5.მოცემულია კავშირების (object) სია (სახელი, ასაკი), დაალაგე სია ასაკის მიხედვით lambda და sorted-ით.

function sortingAges({obj}){
    return obj.age.toSorted();
}

console.log(sortingAges({"guranduxt": 54,"geraldi": 69, "raindia" : "zaan bevri","pavle":2}));