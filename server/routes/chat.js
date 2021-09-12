const verify = require('./verifyToken');
const socketioJwt = require('socketio-jwt');
const jwt = require("jsonwebtoken");
module.exports = (app, io) => {

    let peers = [];
    let rooms = [];

    const broadcastEventTypes = {
        ACTIVE_USERS: 'ACTIVE_USERS',
        GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
    };

<<<<<<< HEAD
    io.use(async (socket, next) => {
        try {
            const token = socket.handshake.query.token;
            const payload = await jwt.verify(token, process.env.TOKEN_SECRET);
            socket.userid = payload._id;
            next();
        } catch (err) {
            next(err);
        }
    });
    io.on("connection", socket => {
        socket.on('join', (roomId) => {
            if(rooms[roomId]){
                rooms[roomId].push(socket.id)
                socket.join(roomId)
                socket.emit('room_joined', roomId)
            }
            else{
                rooms[roomId] = [socket.id];
                socket.join(roomId)
                socket.emit('room_created', roomId)
            }
            console.log("Joining room ", socket.id)
            socket.broadcast.to(roomId).emit("user joined", socket.id);
        });

        socket.on('start_call', (roomId) => {
            console.log(`Broadcasting start_call event to peers in room ${roomId}`);
            socket.broadcast.to(roomId).emit('start_call');
        });
        socket.on('webrtc_offer', (event) => {
            console.log(`Broadcasting webrtc_offer event to peers in room ${event.roomId}`);
            socket.broadcast.to(event.roomId).emit('webrtc_offer', event.sdp);
        });

        socket.on('webrtc_answer', (event) => {
            console.log(`Broadcasting webrtc_answer event to peers in room ${event.roomId}`);
            socket.broadcast.to(event.roomId).emit('webrtc_answer', event.sdp)
        });

        socket.on('webrtc_ice_candidate', (event) => {
            console.log(`Broadcasting webrtc_ice_candidate event to peers in room ${event.roomId}`);
            socket.broadcast.to(event.roomId).emit('webrtc_ice_candidate', event);
        });

    });
=======
    io.on("connection", socket =>{
    
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => getApiAndEmit(socket), 1000);
    
        socket.on("connect", () => console.log("Client connected"));
        socket.on("disconnect", () => {
            console.log("Client disconnected");
            clearInterval(interval);
        });
    });

    // io.sockets.on('connection', socketioJwt.authorize({

    // }));
>>>>>>> 5bf672c434f0efa164e72f6fa2899da042a905fe

    const getApiAndEmit = socket => {
        const response = new Date();
        socket.emit("message", response);
    }
};