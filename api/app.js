require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Application running at port ${port}`));