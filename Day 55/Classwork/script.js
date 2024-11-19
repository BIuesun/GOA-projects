function checkAge() {
    // shevinaxot momxmareblis mier shemotanili informacia let-shi rata masze shegvezlos moqmedebis shersuleba 
    let name = document.getElementById("name").value;  
    let age = document.getElementById("age").value;  

    // elemeneti rom gamovitanot mesiji
    const messageElement = document.getElementById("message");  // gamoviyenot consti radgan ar mogviwevs amis shecvla

    // shemowmeba aris tuara carieli 
    if (name === "" || age === "") {
        messageElement.textContent = "Please fill in both fields!";
        return;
    }

    // ageis ricxvad gardaqmna 
    age = Number(age);

    // shemowmeba 18ze maglaa tuara
    if (age >= 18) {
        messageElement.textContent = `Hello ${name}, you are an adult.`;
    } else {
        messageElement.textContent = `Hello ${name}, you are not an adult. You cannot use this program kiddo.`;
    }
}
