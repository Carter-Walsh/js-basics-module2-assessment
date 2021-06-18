const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a password between 10 and 16 characters: ', (answer) => {
    let isValid = true;
    
    // validate the length
    if (answer.length < 10 ) {
        isValid = false;
        console.log("Password is not long enough");
    } else if (answer.length > 16) {
        isValid = false;
        console.log("Password is too long");
    }
    
    // validate no spaces
    if (answer.includes(" ")) {
        isValid = false;
        console.log("Password cannot have any spaces");
    }

    // validate if it has at least one number
    let count = 0; 
    let answerAsArray = answer.split("");

    for (let i = 0; i <= 9; i++) {
        let str = i.toString();

        if (answerAsArray.includes(str)) {
            count = 1;
        }
    }

    if (count == 0) {
        isValid = false;
        console.log("Password does not contain a number");
    } 

    // validate if it has special character !@#$%^&*
    if (!(answer.includes("!") || answer.includes("@") || answer.includes("#") || answer.includes("$") 
    || answer.includes("%") || answer.includes("^") || answer.includes("&") || answer.includes("*"))) {
        isValid = false;
        console.log("Password does not contain a special character");
    }

    // if everything passes, return success message
    if (isValid) console.log("Great password!");

    rl.close();
  });