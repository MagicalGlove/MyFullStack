// One common use of the spread operator is to combine multiple arrays into one. For example:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8, 9, 10];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Object
const objectX = {foo: 'bar', x: 42};
const clonedObj = {...objectX};
console.log(clonedObj); // Object { foo: "bar", x: 42 }

// Function arguments
const funct = (a, b, c) => {
    console.log(a, b, c);
};
const args = [0, 1, 2];
funct(...args); // 0 1 2

// Using the rest operator in a function parameter to indicate that it can take any number of arguments
function add(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(add(1, 2, 3)); // 6
console.log(add(10, 20, 30, 40)); // 100

const person = { name: 'John', age: 30, job: 'teacher'};
const { name, ...rest } = person;
console.log(name); // 'John'
console.log(rest); // {age: 30, job: 'teacher'}

// Destructering an object into variables
const obj = { first: 'Jane', last: 'Doe' };
const { first, last } = obj;
console.log(first); // Jane
console.log(last); // Doe

// Destructering an array into variables
const array = ['foo', 'bar', 'baz'];
const [firstX, secondX, thirdX] = array;
console.log(firstX); // foo
console.log(secondX); // bar
console.log(thirdX); // baz

const nameX = 'Jane';
const greeting = `Hello ${nameX}!`;
console.log(greeting); // Hello Jane!

const func = (a, b = 2) => {
    console.log(a + b);
};
func(3); // 5


for (var value of iterable) {
    // code to be executed for each value
}

const arr = ['a', 'b', 'c'];
for (const element of arr) {
    console.log(element);
}
// a
// b
// c


for (var property in object) {
    // code to be executed for each property
}


const objX = { a: 1, b: 2, c: 3 };
for (const prop in objX) {
    console.log(`obj.${prop} = ${objX[prop]}`);
}
// obj.a = 1
// obj.b = 2
// obj.c = 3

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(this.name + ' barks.');
    }
}
