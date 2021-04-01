const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json();)

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
