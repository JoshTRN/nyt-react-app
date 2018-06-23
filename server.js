const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send("server listening");
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})