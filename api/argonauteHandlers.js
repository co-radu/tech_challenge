const database = require('./database');

const getArgonautes = (req, res) => {
    database
    .query("select * from argonaute")
    .then(([argonautes]) => {
        res.json(argonautes)
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
    });
};

const postArgonaute = (req, res) => {
    const { name } = req.body;
    
    database
    .query(
        "INSERT INTO argonaute(name) VALUES (?)",
        [name]
        )
        .then((result) => {
            const id = result[0].insertId;
            const createdArgonaute = { id, name };
            res.status(201).json(createdArgonaute);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving the Argonaute");
        });
    };
    
    module.exports = {
        getArgonautes,
        postArgonaute
    };