// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

// let num = prompt ('enter a number:');
// if (num % 2 === 0){
//     alert('number is even');
// } 
// else {
//     alert('number is odd');
// }

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// let num1 = prompt ('enter a number:');
// let num2 = prompt ('enter another number:');
// if (num1 > num2) {
//     alert ('nun1-max-value');
// }
// else if (num1 < num2) {
//     alert ('num2-max-value');
// }

// 3. Convert the above code using`?` terniary operator

// let num1 = prompt ('enter a number:');
// let num2 = prompt ('enter another number:');
// num1 > num2 ? alert ('num1-max-value') : alert ('num2-max-value');


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

// let houseName = prompt ('enter your house name')
// if (houseName === "stark"){
//     alert (" Winter is coming");
// }
// else if (houseName === "lannister"){
//     alert ("A lannister always pays his debt");
// }
// else {
//     alert ("All men must die");
// }


// 5. Convert the above code using`?` terniary operator

let houseName = prompt ('enter your house name')
houseName === "stark" ? alert (" Winter is coming") : alert ("All men must die");
houseName === "lannister" ? alert ("A lannister always pays his debt") : alert ("All men must die");


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.



/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/


 

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/