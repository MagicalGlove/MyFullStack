import express = require("express");
import morgan = require('morgan');
import fs from "fs";
const app = express();

if(process.env.NOCE_ENV === 'development') {
    app.use(morgan('dev'))
    console.log("Development mode.")
}

// http://localhost:3010/homepage.html

// app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`));


// Middleware
app.use((req, res, next) => {
    console.log("Hello from the middleware");
    next();
})

app.use((req, res, next) => {
    // @ts-ignore
    req.requestTime = new Date().toISOString()
    next();
})


// Part 1
app.get("/", (req, res) => {
    // @ts-ignore
    const date = req.requestTime;
    res.status(200)
        .json({
            status: "success",
            message: date,

        })
});

app.get("/hello/:name", (req, res) => {
    res.status(200)
        .json({
            status: "success",
            message: `Hello ${req.params.name || "World"}`,

        })
});

//Part 4
app.get("/error", (req, res) => {
    try {
        res.status(200)
            .json({
                status: "success",
                message: "Hello World",

            })
    } catch (err: any) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message,

            })
    }
});

//Part 5
app.get("/data", (req, res) => {
    console.log("Hi")
    const data = fs.readFileSync('./data.json', 'utf-8');
    res.status(200)
        .header({
            "Content-Type": 'application/json',
            "Content-Length": data.length,

        })
        .json({
            status: "success",
            data: JSON.parse(data)
        })
})

// Part 6 Post JSON data
app.post("/", (req, res) => {

    const jsonData = req.body;
    res.status(201)
        .json({
            status: "success",
            data: jsonData
        })

})

app.listen(3010, () => {
    console.log("server is listening to http://localhost:3010")
})