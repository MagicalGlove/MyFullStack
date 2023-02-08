const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
}

function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
}

processUserInput(greeting);
// processUserInput(name => greeting(name.toUpperCase()))
// processUserInput(name => greeting(name.length))