import chalk from "chalk";

console.log(chalk.green("გამარჯობა!"));
console.log(chalk.red("შეცდომა!"));



import figlet from "figlet";

figlet("Luka", (err, data) => {
  if (err) {
    console.log("Error");
    return;
  }
  console.log(data);
});



import moment from "moment";

const now = moment().format("YYYY-MM-DD HH:mm");
console.log(now);




import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "შენი სახელი რა არის?"
  }
]);

console.log(`გამარჯობა, ${answers.name}!`);



import { v4 as uuidv4 } from "uuid";

for (let i = 0; i < 5; i++) {
  console.log(uuidv4());
}
