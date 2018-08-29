require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  mongoose
} = require('./db.js');
let employeeController = require('./controllers/employeeController.js');

let app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


app.use('/', employeeController);