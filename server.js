const express = require('express');
const projectRouter = require('./routing/projectRouter');
const server = express();

server.use(express.json());
server.use('/api/user', projectRouter);
module.exports = server;