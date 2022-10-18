require("dotenv").config();

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

const argonauteHandlers = require('./argonauteHandlers');

app.get("/", argonauteHandlers.getArgonautes);
app.post("/", argonauteHandlers.postArgonaute);

app.listen(port, (err) => {
    if(err) {
        console.error('Something bad happened');
    } else {
        console.log(`Server is listening on ${port}`);
    }
});