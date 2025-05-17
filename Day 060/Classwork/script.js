const blackScreen = confirm("Do you want a black background?");
const largeText = confirm("Do you want large text?");
const longText = confirm("Do you want a long text?");

// ukana foni
if (blackScreen) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";// ukana foni shavi ro iqneba, texti rom gamochdes
} else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// textis zoma
if (largeText) {
    document.body.style.fontSize = "24px";
} else {
    document.body.style.fontSize = "16px";
}

// davamatot textsi saitze
const result = document.getElementById("result"); // mivwvdet paragraps
if (longText) {
    result.textContent = "This is a long text to something idk,random ig";
} else {
    result.textContent = "This is a short text.";
}
