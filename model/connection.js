const { Client } = require('pg');
const dbConfig = require('../db.config');

const client = new Client(dbConfig);

client.connect();

module.exports = client;