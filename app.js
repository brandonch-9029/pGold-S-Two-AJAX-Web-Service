const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/periods', (req, res) => {
    res.sendFile(__dirname + '/files/json/periods.json');
});

app.get('/artlinks', (req, res) => {
  res.sendFile(__dirname + '/files/json/artLinks.json');
});

app.post('/submit', (req, res) => {
    let userData = JSON.stringify(req.body);
    fs.appendFileSync('responses.txt', userData + '\n');
    console.log(userData + ' logged successfully');
    res.status(201);
    res.end();
});

app.use('/static', express.static(path.join(__dirname, 'files')));

module.exports = app;