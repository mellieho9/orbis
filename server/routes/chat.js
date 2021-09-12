const verify =  require('./verifyToken');
const socketioJwt = require('socketio-jwt');
module.exports = (app, io) =>{

    let interval;


    // io.on("connection", socket =>{
    //
    //     if (interval) {
    //         clearInterval(interval);
    //     }
    //     interval = setInterval(() => getApiAndEmit(socket), 1000);
    //
    //     socket.on("connect", () => console.log("Client connected"));
    //     socket.on("disconnect", () => {
    //         console.log("Client disconnected");
    //         clearInterval(interval);
    //     });
    // });

    io.sockets.on('connection', socketioJwt.authorize({

    }));

    const getApiAndEmit = socket => {
        const response = new Date();
        socket.emit("message", response);
    }

};