function submitForm() {
      
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const agree = document.getElementById("agree").checked;

    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Checkbox Status: " + agree);
  }