function reverse(userInput){
    let reverse = ""
    for(let i = userInput.length - 1; i >= 0; i--){
        reverse += userInput[i];
    }
    return reverse;
}