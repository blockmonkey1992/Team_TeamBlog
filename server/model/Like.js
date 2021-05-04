const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema = ({
    likedUsers: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    whichPost: {
        type: Schema.Types.ObjectId,
        ref: "Post",
    }
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = { Like };