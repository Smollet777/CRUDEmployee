require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const {
  mongoose
} = require('./db.js');

var app = express();
app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));