function sum(p1, p2) {
    return p1 + p2;
}

console.log(sum(2, 3)); //gamoitans 5-s


function minus(p1,p2) {
    return p1 - p2;
}

console.log(minus(3,1)) //gamoitas 2

function multiply(p1,p2) {
    return p1 * p2;
}
console.log(multiply(3,7)) //gamoitans 21


function first_let(st) {
    return st.charAt(0);
}

console.log(first_let("Random")) //gamoitans "R"


function power(num) {
    return num * num;
}
console.log(power(4)) //gamoitans 16

function clr_changer(name) {
    document.getElementById(name).style.color = "red";
}

function text_changer(text) {
    document.getElementById(text).innerText = "Random"
}