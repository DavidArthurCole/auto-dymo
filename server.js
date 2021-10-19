const http = require('http');
const app = require('./app');
var constants = require('./lib/constants');
const logger = require('./lib/util/logger');

//Can overrwite port with an ENV var, otherwise will use 3000
const port = process.env.PORT || 3000;

//Create a server using app.js
const server = http.createServer(app);

const ConsoleWindow = require("node-hide-console-window");
const getDateTime = require('./lib/util/getDateTime');

//Listen on port (3000)
logger.log('info', '\n');
logger.log('info', "----------------------------------------------------------------");
logger.log('info', "----------------------------------------------------------------");
if(!constants.testing) logger.log('info', "\n\n" + getDateTime() + " Server started and listening on port " + port + ":");
else logger.log('info', "%c\n\n" + getDateTime() + " Server started in testing mode and listening on port " + port + ":");
server.listen(port);

if(!constants.testing) ConsoleWindow.hideConsole();