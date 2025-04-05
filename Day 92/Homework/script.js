// 2.Ternary Operator-ის დახმარებით შექმენით პროგრამა რომელიც ამოწმებს მომხამრებლის მიერ შემოტანილი ასაკი მეტია თუ არა 18-ზე

function ageChecker(age){
    age > 18 ? console.log("User is adult") : console.log("User isnt adult")
}

// 3.მოიძიეთ კიდევ დამატებითი მასალა Ternary Operator-ზე და ისწავკეთ თუ როგორ გამოიყენება მასში Else If-ი

let score = 69;

let grade = score >= 90 ? 'A'
          : score >= 80 ? 'B'
          : score >= 70 ? 'C'
          : score >= 60 ? 'D'
          : 'F';

// 4.მოძიებული მასალის დახმარებით შექმენით ფუნქცია რომელსაც გადაეცემა ორი პარამეტრი და შეამოწმეთ რომელია მეტი, თუ რომელიმე რიცხვი მეტია, დაბეჭდეთ ${num1/num2} მეტია, ხოლო თუ ტოლია გამოიტანეთ "Equal"

function higherLower(first,second){
    first > second ? console.log(`${first} is higher`)
        : first < second ? console.log(`${second} is higher`)
        : console.log("they are equal")
}
