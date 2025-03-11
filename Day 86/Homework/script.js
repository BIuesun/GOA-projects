// ID
const colors = [
    "black", "red", "gray", "purple", "teal",
    "blue", "wheat", "yellow", "orange", "green"
];

const ids = [
    "first", "second", "third", "fourth", "fifth", 
    "sixth", "seventh", "eighth", "ninth", "tenth"
];

for (let i = 0; i < ids.length; i++) {
    const div = document.getElementById(ids[i]);
    if (div) div.style.background = colors[i];
}


// Class
const classes = document.getElementsByClassName("CLS");
for(let j = classes.length - 1; j >= classes.length; j--){
    const classDiv = classes[j];
    if(classDiv) classDiv.style.color = colors[j];
}


// Tag
const divTags = document.getElementsByTagName("div");
for(let z = 0 ; z < divTags.length; z++){
    divTags[z].style.fontSize = (Math.floor(Math.random() * 41) + 20) + "px";
}