const router = require('express').Router();

const Cars = require('../cars/cars-model.js');

router.get('/', (req, res) => {
    Cars
        .find()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;
