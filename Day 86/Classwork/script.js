let mainDiv = document.getElementById("main-div");

    for (let i = 1; i <= 10; i++) {
     mainDiv.innerHTML += '<div class="container"><p>something random</p></div>';
    }
    let paragraphs = document.querySelectorAll("#main-div .container p");
