// 1) https://jsonplaceholder.typicode.com/posts/1 – ამ API-დან წამოიღე მონაცემი და console-ში გამოიტანე.
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
