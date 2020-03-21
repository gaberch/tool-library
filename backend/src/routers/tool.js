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

toolRouter.get('/tools', async (req, res) => {
    try {
        // console.log('/tools pinged');
        const tools = await Tool.find({});

        res.send(tools);
    } catch (error) {
        res.status(500).send();
    }

});

toolRouter.get('/tools/:id', async (req, res) => {
    const _id = req.params.id;
    
    try {
        const tool = await Tool.findById(_id);

        if(!tool) {
            return res.status(404).send();
        }

        res.send(tool);
    } catch(error) {
        res.status(500).send();
    }
})

toolRouter.patch('/tools/:id', async (req, res) => {
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'available'];
    const validUpdate = updates.every((update) => allowedUpdates.includes(update));

    if(!validUpdate) {
        return res.status(400).send({error: "Invalid update parameter"})
    }

    try {
        const tool = await Tool.findByIdAndUpdate(_id,req.body, { runValidators: true, new:true })

        if(!tool) {
            return res.status(404).send();
        }

        res.send(tool);
    } catch (error) {
        res.status(400).send(error);
    }

})


module.exports = toolRouter;