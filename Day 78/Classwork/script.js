function matrix(d2Matrix){
    let result = [];

    for(let i = 0; i < d2Matrix.length; i++){
        result.push(d2Matrix[i].length);
    }
    return result;
}