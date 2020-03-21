const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-ytkv7.mongodb.net/tool-library?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

