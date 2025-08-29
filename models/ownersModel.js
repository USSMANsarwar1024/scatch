const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    
    products: {
        type: Array,
        default: []
    },
    
    picture: String,
    gstNo: Number
});

module.export = mongoose.model('owner', ownerSchema);