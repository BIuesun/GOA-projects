let robot = true;
let car = true;
let ball = false;

let child1Plays = ball;                      
let child2Plays = !robot;                   
let child3Plays = robot && car;              
let child4Plays = car || ball;              
let child5Plays = !robot && (car || ball);   

if (child1Plays) {
    console.log("Child 1 plays.");
}

if (child2Plays) {
    console.log("Child 2 plays.");
}

if (child3Plays) {
    console.log("Child 3 plays.");
}

if (child4Plays) {
    console.log("Child 4 plays.");
}

if (child5Plays) {
    console.log("Child 5 plays.");
}