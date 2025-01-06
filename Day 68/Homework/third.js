// 3. 3) მომხმარებელს შეაყვანინეთ პაროლი. სანამ სწორ პაროკს არ შეიყვანს (12348765 ), იქამდე გააგრძელეთ კითხვა.

// do-while
function password() {
    let userInput;
    const correctPassword = "12348765";
    do {
        userInput = prompt("Enter your password: ");
    } while (userInput !== correctPassword);
    alert("Access granted!");
}

// while

let userInput = prompt("Enter your password: ");
const correctPassword = "12348765";

while (userInput !== correctPassword) {
    userInput = prompt("Incorrect password. Please try again: "); 
}

alert("Access granted!");