let main = document.querySelector("main");

for (let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.style.width = `${i * 20}px`;
    div.style.height = `${i * 20}px`;
    div.style.background = "blue";
    div.textContent = `Div ${i}`;

    if (i % 2 === 0) {
        main.append(div); // ლუწი შემთხვევაში ბოლოში ვამატებთ
    } else {
        main.prepend(div); // კენტ შემთხვევაში თავში ვამატებთ
    }
}
