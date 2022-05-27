const express = require('express');
const router = express.Router();

// const homeController = require('../controllers/home_controller');

router.get('/', function(req, res){
    res.send("Working!");
});

router.use('/api', require('./api'));

module.exports = router;