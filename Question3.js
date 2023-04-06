// 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");
let num3 = +prompt("Enter Third Number");
let num4 = +prompt("Enter Fourth Number");
let num5 = +prompt("Enter Fifth Number");
let largestNumber = Math.max(num1,num2,num3,num4,num5);
console.log(`The largest number enter by a user is ${largestNumber}`);