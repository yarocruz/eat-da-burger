const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all(data => {
        //res.send(data); // This is just to test out if everything is hooked up together. / Successfully doing the query to SQL Database and returning the data as JSON
        res.render('index', { burger: data })
    })
})

router.post('/api/burgers', (req, res) => {
    burger.add('burger_name', req.body.burger_name, function (result) {
        res.json(result);
    })
})

module.exports = router;