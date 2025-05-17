// 1. ternary operator-ის დახმარებით დაწერეთ პროგრამა, თუ მომხამრებლის მიერ შემოტანილი რიცხვი არის 2-ის ჯერადი გამოიტანოს "Two", სხვა შემთხვევაში გამოიტანეთ იგივე რიცხვი
function evenOdd(userInp){
    return userInp % 2 == 0 ? "Two" : userInp
}

// 2.ternary operator-ის დახმარებით დაწერეთ პროგრამა, თუ მომხამრებლის მიერ შემოტანილი რიცხვი არის ლუწი გამოიტანოს ამ რიცხვის 8-ზე ნამრავლი, თუ კენტია გამოიტანოს 9-ზე ნამრავლი

function evenOddsecond(userInp2){
    return userInp2 % 2 == 0 ? userInp2 * 8 : userInp2 * 9;
}

// 3.შექმენით ფუნქცია chekNumber რომელიც იღებს ერთ პარამეტრს, სადაც გექნებათ ternary operator, თუ რიცხვი არის დადებითი გამოიტანეთ "Positive", ხოლო თუ უარყოფითია გამოიტანეთ "Negative" (არგუმენტი ყოველთვის იქნება ან 0-ზე მეტი, ან ნაკლები)

function checkNum(n){
    return n > 0 ? "Positive" : "Negative"
}

//  4.შექმენით ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივიდან რენდომ ელემეტს.

function randomElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
