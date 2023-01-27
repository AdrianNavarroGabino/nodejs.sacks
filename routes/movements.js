const express = require('express');
const Movement = require('../model/movement');
const router = express.Router();

router.get('/', (req, res) => {
    Movement.getAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;