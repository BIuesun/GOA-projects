function task(){
    return new Promise((resolve)=>{
        let delay =  1000 + Math.random() * 4000;
        setTimeout(() => {
            resolve("task 1 completed");
        },delay) 
    })
}