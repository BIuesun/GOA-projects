// 1) შექმენი Promise, რომელიც resolve-დება 2 წამში ტექსტით:"Operation successful!" და გამოიტანე then-ით.

function operation(){
    return new Promise(resolve=>{
        setTimeout(() => resolve("operation successful"),2000)
    }).then((result) => console.log(result))
}

operation()

// 2) შექმენი Promise, რომელიც 3 წამში reject-დება ტექსტით: "Something went wrong!" და გამოიტანე catch-ით.

function rejectedPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => reject("something went wrong!"),3000)
    }).catch((error) => console.log(error))
}
rejectedPromise()

// 3)  გააკეთე Promise-ების ჯაჭვი:
// პირველი resolve იყოს "Step 1 done".
// მეორე then დაამატოს " -> Step 2 done".
// მესამე then დაამატოს " -> Step 3 done".
//  საბოლოოდ console.log-ში უნდა იყოს სრული ტექსტი.

function promiseChain(){
    return new Promise(resolve=>{
        resolve("step 1 done,")
    }).then((result) => result + " step 2 done,")
      .then((result) => result + " step 3 done,")
      .then((final)=> console.log(final))
}

promiseChain()

// 4) შექმენი ფუნქცია delay(ms), რომელიც აბრუნებს Promise-ს და resolve ხდება ms მილიწამში.
// გამოიყენე await ან then რათა: "Hello" გამოვიდეს 2 წამში, ხოლო "World" — 3 წამში.

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello")
        },ms)
    }).then((result)=> console.log(result),2000)
      .then((result)=> console.log(result + "World",3000))
}

delay()

// 5)