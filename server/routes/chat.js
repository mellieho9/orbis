const verify =  require('./verifyToken');
module.exports = (app, io) =>{

    let socketConnection;

    app.get('/chat', verify, (req, res)=>{
        console.log(req.body);
    });

    io.on("connection", socket =>{

        socketConnection = socket;

        socket.on("connection", () => console.log("Client connected"));
        socket.on("disconnect", () => console.log("Client disconnected"));
    });

};