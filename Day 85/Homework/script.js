// getElementById
let titleElement = document.getElementById("title");
console.log("ID-თ მიღებული ელემენტი:", titleElement);

// getElementsByClassName
let classElements = document.getElementsByClassName("class-element");
console.log("Class-ით მიღებული ელემენტები:", classElements);

// getElementsByTagName
let tagElements = document.getElementsByTagName("span");
console.log("TagName-ით მიღებული ელემენტები:", tagElements);

// innerHTML - კონტენტის შეცვლა
function changeContent() {
    document.getElementById("paragraph").innerHTML = "კონტენტი შეიცვალა!";
}

// style - სტილის შეცვლა
function changeStyle() {
    document.getElementById("title").style.color = "red";
}