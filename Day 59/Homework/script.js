function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
    const messageElement = document.getElementById('message');

    if (firstName === "" || lastName === "" || email === "" || password === "" || !terms) {
        messageElement.textContent = "Please fill in all fields.";
        return;
    }

    // shemowmeba tu yvela sworia
    const userData = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
        Terms: "Agreed"
    };

    console.log(userData);
    messageElement.textContent = "";
    alert("Registration successful!");
}
