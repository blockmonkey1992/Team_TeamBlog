const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true,
        minlength: 10,
        maxlength: 30,
    },
    name:{
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 20,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 30,
    },
    //role = 0 은 일반유저, 1 어드민유저.
    role:{
        type: Number,
        default: 0,
    },
}, {timeStamps: true});

const User = mongoose.model("User", userSchema);

module.exports = { User };