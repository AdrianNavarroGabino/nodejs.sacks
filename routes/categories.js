const express = require('express');
const Category = require('../model/category');
const router = express.Router();

router.get('/', (req, res) => {
    Category.getAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;