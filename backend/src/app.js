const express = require('express');

require ('./db/mongoose');
const toolRouter = require('./routers/tool');

const app = express();

app.use(express.json());
app.use(toolRouter);

module.exports = app;

