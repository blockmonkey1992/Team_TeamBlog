const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        minlength: 3
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    refComment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }

}, {timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {Comment};

