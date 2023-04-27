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

server.applyMiddleware({ app });


app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use("/api/people", personRoute)

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
export default app;
