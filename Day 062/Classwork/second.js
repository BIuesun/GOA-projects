function toggleText() {
    const textElement = document.getElementById("text");

    if (textElement.style.opacity == "0") {
        textElement.style.opacity = "1";
        textElement.textContent = "გამარჯობა";
    } else {
        textElement.style.opacity = "0";
        textElement.textContent = "ნახვამდის";
    }
}
