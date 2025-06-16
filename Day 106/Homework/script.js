// 1.მოცემულია სახელების მასივი. გამოიყენე forEach, რათა მხოლოდ ის სახელები დაბეჭდო, რომელთა სიგრძეც 5-ზე მეტია.

function longerThanFive(names){
    names.forEach(element => {
        if(element.length > 5){
            console.log(element)
        }
    });
}

longerThanFive(["Luka","Guranduxti","evfratine","givi"])


// 2.მოცემულია რიცხვების მასივი. გამოიყენე forEach, რომ შეადგინო ახალი მასივი მხოლოდ ლუწი რიცხვებით.

function evensOnly(nums){
    let result = [];
    nums.forEach(element =>{
        if(element % 2 == 0){
            result.push(element);
        }
    });
    console.log(result);
}

evensOnly([1,5,67,7,84,,3,5,7,8,2])

// 3.მოცემულია ობიექტი, სადაც გასაღებებია პროდუქტების სახელები და მნიშვნელობები - მათი ფასები. დაბეჭდე მხოლოდ ის პროდუქტები, რომელთა ფასი 10-ზე მეტია. გამოიყენე for...in.

function priceMoreThanTen(prices){
    for(const item in prices){
        if(prices[item] > 10){
            console.log(item);
        }
    }
}
priceMoreThanTen({
    "apple":5,
    "tomato":6,
    "cocaine":25,
    "salt":12
})

// 4.მოცემულია ობიექტი სტუდენტის ქულებით. დაითვალე რამდენი საგანი აქვს სტუდენტს ჩაჭრილი (ქულა < 51). გამოიყენე for...in.

function passFail(subjects){
    for(const grades in subjects){
        if(subjects[grades] < 51){
            console.log(grades);
        }
    }
}

passFail({
    "math" : 52,
    "english": 60,
    "georgian": 14,
    "history": 1121,
    "russian": 1918,
    "geography": 43,
})