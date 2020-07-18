const input = require('readline-sync');
let num = input.question("How many letters do you wish to move in 'LaunchCode?' (Must be between 1-9.) ");
if (num > 9) {
  console.log("Please input a number between 1-9.");
  
} else {

let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let first = str.slice(0,num)
let second = str.substr(num,9) + first;


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`When the beginning ${num} letters from ${str} are removed - "${first}", and moved from the beginning to the end of the word, you get "${second}."`);
}
//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
