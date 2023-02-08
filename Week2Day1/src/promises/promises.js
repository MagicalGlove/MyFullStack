
// Using calculate

// const calculate = (x, y, callback) => {
//     // executor function
//     return new Promise((resolve, reject) => {
//         try {
//             console.log("x: ", x)
//             console.log("y: ", y)
//         const data = callback(x, y)
//             console.log(data)
//         resolve(data)
//         } catch (e){
//
//         reject("It didn't work: ", e.message)
//         }
//     });
// };

// Using async
const calculate = async (x, y, callback) => {
    // executor function
    try {
        console.log("x: ", x)
        console.log("y: ", y)
        const data = callback(x, y)
        console.log(data)
        return (data)
    } catch (e) {

        throw new Error(e.message)
    }
};


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
//
// console.log(calculate(5, 6, add))
// console.log(calculate(5, 6, subtract))
// console.log(calculate(5, 6, multiply))
// console.log(calculate(5, 3, divide))

calculate(4, 3, add)
    .then(res => calculate(res, 5, subtract)
        .then(res => calculate(res, 3, multiply)
            .then(res => calculate(res, 5, divide))));
