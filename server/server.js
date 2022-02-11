const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../pb-and-jj/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pb-and-jj/build/index.html'))
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});