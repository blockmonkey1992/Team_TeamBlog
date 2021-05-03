const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema = ({
    likedUsers: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    whichPost: {
        type: Schema.Types.ObjectId,
        ref: "Post",
    }
});

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };