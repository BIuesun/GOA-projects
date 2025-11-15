// 1. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the rejection and log the error message.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => reject("Promise failed"), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 3 resolved"), 1500);
});


Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

  
// 2.Create three Promises that resolve or reject based on random conditions. Use Promise.all to log all resolved messages or handle the rejection.
