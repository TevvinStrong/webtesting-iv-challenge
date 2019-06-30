const express = require('express');

const carsRouter = require('./cars/cars-router.js');

const server = express();

server.use(express.json());

//test request
server.get('/', (req, res) => {
    res.send('Server is working');
});

module.exports = server;