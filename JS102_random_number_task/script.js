// Collect input from user
const inputNumber = prompt("Provide a number");
// Convert to number
const newNumber = parseInt(inputNumber);
// use math.random and user's number to generate a new number
const randomNumber = Math.floor(Math.random() * newNumber) + 1;
// Display message
console.log (`${randomNumber} is a random number between 1 and ${{newNumber}}`)