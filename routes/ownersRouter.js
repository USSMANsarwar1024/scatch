const express = require('express');
const router = express.Router();
const ownerModel = require('../models/ownersModel');

router.get('/', (req, res) => {
    res.send("Hey");
});

if(process.env.NODE_ENV === 'development') {
    router.post('/create', async (req, res) => {
        // res.send("Hey, this is create route!");

        let owners = await ownerModel.find();

        if(owners.length > 0) {
            return res
            .status(505)
            .send('No permission to create a NEW owner');
        }

        let {fullname, email, password} = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password      
        });
        
        res.status(201).send(createdOwner);
    });
}


module.exports = router;



