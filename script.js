// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
let secret;
let password = 'abc123';
do {
  secret = prompt("What is the secret password?");
} while ( password !== 'abc123' );

// This should run after the loop is done executing
alert("You know the secret password. Welcome!");