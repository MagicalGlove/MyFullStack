const calculate = (x, y, callback) => {
    return callback(x, y)
}

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    return x / y;
}

console.log(calculate(5, 6, add))
console.log(calculate(5, 6, subtract))
console.log(calculate(5, 6, multiply))
console.log(calculate(5, 6, divide))