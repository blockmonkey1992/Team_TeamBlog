const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema({
    likedUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    whichPost: {
        type: Schema.Types.ObjectId,
        ref: "Post",
    }
}, {timestamps: true});

const Like = mongoose.model("Like", LikeSchema);

module.exports = { Like };