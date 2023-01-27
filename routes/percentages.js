const express = require('express');
const Percentage = require('../model/percentage');
const router = express.Router();

router.get('/', (req, res) => {
    Percentage.getAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;