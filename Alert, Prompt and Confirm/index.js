// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

/*
- Create a variable named `language` and store the value of `JavaScript` in it
- Alert message saying `I am learning [language]`
- Alert `The value of num1 is [num1] and the value of num2 is [num2]`
- Alert `The sum of [num1] and [num2] is [num1 + num1]`
*/

let language = "JavaScript";
alert(`i am learning ${language}`);

let num1 = 2;
let num2 = 5;
alert(`the value of num1 is ${num1} and the value of num2 is ${num2}`);
alert(`the value of ${num1} and ${num2} is ${num1 + num2}`);

/*
2. Do the following using `alert`, `prompt` and `confirm` and `console`

  - Using prompt accept the name of the user and store it in a variable names `userName`
  - Using prompt accept the profession of the user and store it a variable names`userProfession`
  - Using confirm check if user is adult or not and store the value in `isAdult`
  - Alert message `I am [userName] a [userProfession]`
  - Log the message `I am [userName] a [userProfession]`
  - Alet message `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
  - Log the message using console.log `Username: [userName]
    Adult: [isAdult]
    Profession: [userProfession]` (it should be in three different lines)
*/

let userName = prompt(`enter your name`);
let userProfession = prompt(`what is your profession?`);
let isAdult = confirm(`are you an adult`);

//

alert(`i am ${userName} a ${userProfession}`);

//

alert(
  `username: ${userName}
Adult: ${isAdult}
Profession: ${userProfession}`
);

console.log(
  `username: ${userName}
Adult: ${isAdult}
Profession: ${userProfession}`
);

/*
. Addition using prompt

  - Accept two number values from user and store them in `numA` and`numB`.
  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/

let numA = Number(prompt(`enter a number!`));
let numB = Number(prompt(`enter another number!`));

alert(`${numA + numB}`);
alert(`${numA - numB}`);
alert(`${numA * numB}`);

console.log(`${numA - numB}`);
console.log(`${numA * numB}`);
