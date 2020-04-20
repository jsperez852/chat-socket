const socketIO = require('socket.io');

const initSocket = (server) => {
    const socketListener = socketIO.listen(server);

    socketListener.on('connection', (socket) => {
        console.log('connection on', socket.id);
        socket.on('chat:message', (data) => {
            socket.broadcast.emit('chat:message', data);
        });
        socket.on('chat:typping', userName => {
            socket.broadcast.emit('chat:typping', userName);
        });
    });

    return socketListener;
};

module.exports = initSocket;