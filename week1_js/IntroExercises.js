function createMultiplier(y) {
    return (x) => x * y;
}

const timesTwo = createMultiplier(2);
const timesThree = createMultiplier(3);
const timesFour = createMultiplier(4);

console.log(timesThree(5))
console.log(timesFour(5))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const square = numbers.map( x => x ** 2)
// console.log(square)

// 1. Create a function
// 2. Create a new array, that array will be returned
// 3. Loop through the array
// 4. For each element, call the function

function map(array, mapFunc) {
    const mapArr = [];

    for (let i = 0; i < array.length; i++) {
        const result = mapFunc(array[i], i);
        mapArr.push(result)
    }

    return mapArr

}

const square = map(numbers, (num) => num ** 2);
console.log(square)

const evenNumbers = numbers.filter(x => x % 2 === 0)
console.log("filter: even", evenNumbers)

function myFilter(array, filterFunc) {
    const filterArray = [];
    for (let i = 0; i < array.length; i++) {
        filterFunc(array[i] && filterArray.push(array[i]))
    }
    return filterArray
}

const even = myFilter(numbers, (x) => x % 2 === 0)
//Doesn't work :D
console.log("myFilter: even", even)


//Create a variable sum and assign it to 0.
//Loop through the array elements.
//Add the current element to the sum variable.
//Return the sum variable after going through all the elements.

const reduce = (arr, reduceFunc, initValue) => {
    let sum = initValue;
    for (let i = 0; i < arr.length; i++) {
        sum = reduceFunc(sum, arr[i])
    }
    return sum;
}

const sum = reduce(numbers, (sum, num) => sum + num, 0)
console.log("sum: ", sum)
const multiply = reduce(numbers, (sum, num) => sum + num, 1)
console.log("multiply: ", multiply)
