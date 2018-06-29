const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

const db = mongojs('nytreact', ['random'])
const app = express();

const PORT = process.env.PORT || 3001;

//Server listening check
app.get('/', (req, res) => {
    console.log(req.params)
   //serving mongo data check 
    db.random.find((err, docs) => {
        res.json(docs)
    })
});

//hooking up to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
});