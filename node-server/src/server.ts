import * as dotenv from 'dotenv';
import * as http from 'http';
import * as url from "url";
import * as fs from 'fs';
import logger from "./utility/logging";

dotenv.config({path: '../config.env'});

//To run file:
// CD into /src
// Run the file: ts-node server.ts

// Part 1
const data = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8');
// console.log(data)
const server = http.createServer((req, res) => {

    const {query, pathname, path, href, search} = url.parse(req.url!, true);
    // Set responds header
    res.writeHead(200, {"Content-Type": "text/html"});
    // const pathname = req.url;

    console.log(pathname)
    fs.readFile(`${__dirname}/public/homepage.html`, 'utf-8', (err, data) => {
        res.end(data);
    });

    if (pathname === '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile(`${__dirname}/public/homepage.html`, 'utf-8', (err, data) => {
            res.end(data);
        });
    } else if (pathname === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        logger.warn("WARNING YOU AT THE ABOUT PAGE!")
        res.end("<h1>About</h1>")
    } else if (pathname === "/date") {
        res.writeHead(200, {"Content-Type": "text/html"});
        console.log(query)
        res.end(`Date: ${query.year}, ${query.month}, ${query.day}`)
    } else if (pathname === "/data") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(400, {"Content-Type": "text/html"});
        res.end(`Path ${pathname} does not exist.`)
    }
    res.end("Hello World!");
})


server.listen({
        host: process.env.HOSTNAME,
        port: process.env.PORT,
        exclusive: true
    }, () => {
        console.log(`Server is listening to http://localhost:${process.env.PORT}`)
        logger.info(`Server is listening to http://localhost:${process.env.PORT}`)
    }
)