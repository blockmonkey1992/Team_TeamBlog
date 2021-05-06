const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    postImg: {
        type: String
    },
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    creator: {
        type: String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
}, { timestamps:true });

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };