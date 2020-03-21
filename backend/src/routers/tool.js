const express = require('express');
const Tool = require('../models/tool');

const toolRouter = express.Router();

toolRouter.post('/tools', async (req, res) => {
    const tool = new Tool(req.body);

    try {
        await tool.save();

        res.status(202).send(tool);
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = toolRouter;