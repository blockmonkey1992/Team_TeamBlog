const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = mongoose.Schema({
    email:{
        type: String,
        trim: true,
        required: true,
        minlength: 10,
        maxlength: 30,
        unique: true,
    },
    name:{
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 20,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100,
    },
    //role = 0 은 일반유저, 1 어드민유저.
    role:{
        type: Number,
        default: 0,
    },
}, { timeStamps: true });

userSchema.pre("save", function(next){
    let user = this;

    //유저 비밀번호가 변경될 때,
    if(user.isModified("password")){
        //Bcrypt로 salt 생성,
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);
            //비밀번호 해시하기.
            bcrypt.hash(user.password, salt, function(err, hashedPassword){
                if(err) return next(err);
                user.password = hashedPassword;
                next();
            })
        })
    } else {
        next();
    }
});


const User = mongoose.model("User", userSchema);

module.exports = { User };