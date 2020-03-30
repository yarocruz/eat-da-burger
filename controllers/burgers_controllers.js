const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all(data => {
        //res.send(data); // This is just to test out if everything is hooked up together. / Successfully doing the query to SQL Database and returning the data as JSON
        res.render('index', { burger: data })
    })
})

module.exports = router;