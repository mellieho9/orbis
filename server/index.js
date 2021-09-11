const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")
app.use(cors())
const bodyParser = require('body-parser');
dotenv.config({path:'.env'});
mongoose.connect(
    process.env.DB_CONNECTION, {useNewURLParser:true}, ()=> console.log('connected to db!')
    );
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
io.on("connection", socket => {
console.log(socket.id);
});
const port = process.env.PORT || 8080
const authRoute = require('./routes/auth');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/user',authRoute);
app.get('/', (req, res) => {
    res.status(200).send('Working')
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});