const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')('development:mongoose');
// $env:DEBUG="development:*"

mongoose
    .connect(`${config.get('MONGODB_URI')}/scatch`) //this works on the basis k env variable ki value kaya ha
    .then(function () {
        dbgr('MongoDB Connected Sucessfully');
        // can also use debuggers
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose.connection;
