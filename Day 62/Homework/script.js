const user_input = prompt("Please enter a text: ");
const output_text = document.getElementById("Ptag");

const match = user_input.match(/[^a-zA-Z\s]/); //ipovos pirveli shecdoma

if (match) {
    output_text.textContent = 'Error: Invalid character "' + match[0] + '" found at position ' + (match.index + 1) + '.';
    output_text.style.color = "red";
} else {
    output_text.textContent = "Process successful!";
    output_text.style.color = "green";
}
