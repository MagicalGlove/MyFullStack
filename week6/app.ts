import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'});
import express = require("express");
import morgan = require('morgan');
import logger from "./utility/logger";
import personRoute from "./routes/personRoute";


const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use("/api/people", personRoute)

export default app;
