require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 1337;
const {
  mongoose
} = require('./db.js');
let employeeController = require('./controllers/employeeController.js');

let app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200
  })
);

app.listen(port, () => console.log(`Server started at port : ${port}`));


app.use('/', employeeController);