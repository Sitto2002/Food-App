const express = require('express');
const dbConnect1 = require('./MongoDB1');
const dbConnect2 = require('./MongoDB2');
const app = express();
const port = 5000;

app.use((req,resp,next) => {
    resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    resp.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept"
    );
    next();
})
// const mongoDB = require("./MongoDB");

dbConnect1();
dbConnect2();

app.use(express.json());

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})