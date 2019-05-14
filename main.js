const express = require('express');
const path = require('path');

//inti
const server = express();


server.use(express.static(path.join(__dirname,'Web')));

server.listen(8080);
