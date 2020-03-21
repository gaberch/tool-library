const mongoose = require('mongoose');

const Tool = mongoose.model('Tool', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: 'No description provided'
    },
    available: {
        type: Boolean,
        default: true
    }
});

module.exports = Tool;