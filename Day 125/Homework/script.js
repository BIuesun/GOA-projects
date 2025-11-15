const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Operation successful!"), 2000);
});

promise1.then(msg => console.log(msg));


const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Something went wrong!"), 3000);
});

promise2.catch(err => console.log(err));



Promise.resolve("Step 1 done")
  .then(res => res + " -> Step 2 done")
  .then(res => res + " -> Step 3 done")
  .then(final => console.log(final));




  function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runDelays() {
  await delay(2000);
  console.log("Hello");

  await delay(3000);
  console.log("World");
}

runDelays();




function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({name:"Soso", age:20}), 2000);
  });
}

getUser().then(user => console.log(user.name));
