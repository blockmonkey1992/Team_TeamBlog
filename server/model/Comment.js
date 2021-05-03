const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({

    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    contents: {
        type: String,
        minlength: 3
    }
}, {timeStamps: true});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {Comment};

