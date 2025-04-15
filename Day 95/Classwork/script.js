let div = document.querySelector("#main-container");

div.addEventListener("click", function() {
    div.style.display = "none";

    setTimeout(function() {
        div.style.display = "block";
    }, 1000);
});
