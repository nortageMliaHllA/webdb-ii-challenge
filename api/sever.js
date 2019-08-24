const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/car-dealer', carRouter);

module.exports = server;