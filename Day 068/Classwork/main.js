function multiply() {
    while (true) {
        let num1 = prompt("Enter the first number:");
        let num2 = prompt("Enter the second number:");

        // gavamravlot da davabrunot
        alert(`The result is: ${num1 * num2}`);

        // tu gasvla unda
        if (prompt("Press Enter to exit or type anything to continue:") === "") {
            break;
        }
    }
}
