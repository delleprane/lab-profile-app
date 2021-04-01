require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// connect mongodb
require('./configs/db.configs')

const cors = require('cors');
const app = express();
// cross-origin
app.use(cors());
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// routes
const routes = require('./routes/auth.routes');
app.use('/', routes);


module.exports = app;