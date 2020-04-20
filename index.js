const express = require('express');
const path = require('path');
const app = express();
const socketInit = require('./socket.js');

app.set('port', process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

const socket = socketInit(server);
