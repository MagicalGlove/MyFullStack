const superagent = require('superagent');
const fs = require("fs");

// Callback-Hell

// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//
//     superagent
//         .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//         .end((err, res) => {
//             if (err) return console.log(err);
//             console.log(res.body.message);
//             fs.writeFile('dogImg.txt', res.body.message, err => {
//                 if (err) return console.log(err);
//                 console.log("Dog Imaged Saved to File Successfully");
//             });
//         });
// });

// THEN SYNTAX
//
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//
//     superagent
//         .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//         .then(res => {
//             console.log(res.body.message)
//             fs.writeFile('dogImg.txt', res.body.message, err => {
//                 if (err) return console.log(err);
//                 console.log("Dog Imaged Saved to File Successfully");
//             });
//         })
//         .catch(err => console.log(err.message));
// });

// PROMISES

const readFilePro = (file) => {
    // executor function
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) reject("File not found!");
            resolve(data);
        });
    });
};

const writeFilePro = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dogImg.txt', data, err => {
            if (err) reject("File Not Found!");
            resolve("'Dog Image Saved to File Successfully'");

        })
    })

};

// readFilePro(`${__dirname}/dog.txt`)
//     .then(data =>
//         superagent
//             .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//             .then(res => writeFilePro(res.body.message))
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//             .finally(() => console.log("I'm Done!"))
//     );

// ASYNC/AWAIT

// const getDogPics = async () => {
//     try {
//         const data = await readFilePro(`${__dirname}/dog.txt`);
//         const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
//         const text = await writeFilePro(res.body.message)
//
//         console.log(text);
//         return (text);
//     } catch (e) {
//         throw new Error(e.message);
//     }
// }

// IFFI - Immediately Invoked Function Expressions
// (async () => {
//     try {
//         const data = await getDogPics();
//         console.log("data", data)
//     } catch (e) {
//         console.log(e);
//     }
//
// })();

// Waiting for multiply Promises

const getDogPics = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const res3 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);

        const all = await Promise.all([res1, res2, res3]);
        const images = all.map(el => el.body.message);
        console.log("images", images)

        const text = await writeFilePro(images.join('\n'));

        console.log(text);
        // return (text);
    } catch (e) {
        throw new Error(e.message);
    }
}

getDogPics()
