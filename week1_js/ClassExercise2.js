function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function operateOnNumbers(operator, x, y) {
    return operator(x, y);
}

const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function divide(number) {
    return number / 10
}


function power(number) {
    return number ** 2
}

function assignment3(power, divide, array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(divide(power(array[i])))
    }
    return newArray
}

const twoOperations = (operator1, operator2, arrNumbers) => {
    for (const number of arrNumbers) {
        console.log(operator2(operator1(number, 2), 3));
    }
};

twoOperations(
    (x, y) => x + y,
    (x, y) => x * y,
    [1, 2, 3, 4, 5],
);

function calculator(x) {
    return x ** 2 / 10
}

console.log("assignment3: " + assignment3(power, divide, arrayOfNumber))
console.log("Calculator: " + calculator(4))
console.log(operateOnNumbers(add, 3, 4));   // 7
console.log(operateOnNumbers(multiply, 3, 4));   // 12

console.log("Here: ")
console.log(operateOnNumbers((x, y) => {
    return x - y;
}, 53, 51))

console.log("Hello you");
setTimeout(() => {
    console.log("Hello again");
}, 1000);
console.log("Hello you");
setTimeout(() => {
    console.log("Hello again");
}, 2000);
console.log("Hello you");
setTimeout(() => {
    console.log("Hello again");
}, 3000);
console.log("Hello you");
setTimeout(() => {
    console.log("Hello again");
}, 4000);