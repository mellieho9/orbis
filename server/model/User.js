const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        max:255
    },
    lastname:{
        type:String,
        max:255
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        max:255
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    }
});
module.exports = mongoose.model('User',userSchema);