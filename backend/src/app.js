const express = require('express');
const cors = require('cors');

require ('./db/mongoose');
const toolRouter = require('./routers/tool');

const app = express();

app.use(express.json());
app.use(cors());
app.use(toolRouter);

module.exports = app;

