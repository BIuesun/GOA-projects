let human = {
    name: "Luka",
    age: 16,
    gender: "male"
  };
  
  console.log(`Their name is ${human.name}, they are ${human.age} years old, and their gender is ${human.gender}.`);

 ///////////////////////
  let human2 = {
    name:prompt("Please input your name: "),
    age:prompt("Please input your age: "),
    gender:prompt("Please input your gender: ")
  }
  console.log(`Their name is ${human2.name}, they are ${human2.age} years old, and their gender is ${human2.gender}.`);