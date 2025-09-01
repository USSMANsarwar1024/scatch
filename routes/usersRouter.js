const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/authController')

router.get('/', (req, res) => {
    res.send("Hey");
});

router.post('/register', registerUser);

module.exports = router;



