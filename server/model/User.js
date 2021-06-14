const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
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
    token: String,
}, { timestamps: true });


//Pre를 사용해 save 동작 전에 Bcrypt로 비밀번호 암호화 수행;
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


//비밀번호대조;
userSchema.methods.comparePassword = function(plainPassword, cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err){
            return cb(err);
        } else {
            cb(null, isMatch);
        }
    })
};

//토큰 생성;
userSchema.methods.generateToken = function(cb){
    var user = this;
    //JWT를 활용해 (user의 _id값 + secret Key를 합쳐 토큰을 생성한다.)
    var token = jwt.sign(user._id.toHexString(), JWT_SECRET_KEY);
    user.token = token;
    user.save((err, user)=>{
        if(err){
            return cb(err);
        } else {
            return cb(null, user);
        }
    })
}

//토큰 비교;
userSchema.statics.compareToken = function(token, cb){
    var user = this;
    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decodedId){
        user.findOne({ "_id": decodedId, "token": token }, function(err, user){
            if(err){
                return cb(err);
            } else {
                cb(null, user);
            }
        })
    })
}


const User = mongoose.model("User", userSchema);

module.exports = { User };