const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const bodyLogger = require('morgan-body');
const path = require('path');
const { STORAGE_PATH } = process.env;




const app = express();


// Middlewares.
app.use(express.static('public'))
app.use(helmet());
app.use(cors());
app.use(logger(':date[web] :method :url :status :res[content-length] - :response-time ms, AUTH :req[Authorization]'));
bodyLogger(app);
app.use(bodyParser.json());



/** Routes **/
app.use('/api', require('./routes/api'))





module.exports = app;
