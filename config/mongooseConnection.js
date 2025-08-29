const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/scatch')
    .then(function () {
        console.log('MongoDB Connected Sucessfully');
        // can also use debuggers
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose.connection;
