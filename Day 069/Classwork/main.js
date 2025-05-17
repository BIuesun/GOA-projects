//  შექმენით პროგრამა რომელიც მომხმარებლის შეტანილი რიხცვს დაუმატებს ერთ ერთს სანამ მოცემული რიცხვი არ შედგება 0-ებისგან ( პირველი რიცხვუს გარდა ), მაგ: 156–> 200, 5678 —> 6000…

function round(number) {
    let str = number.toString();
    let result = str[0];
    
    for (let i = 1; i < str.length; i++) {
        result += '0';
    }

    return result;
}
