const mongoose = require("mongoose");

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
        type:String
    },
    category: {
        type:String
    },
}, { timeStamps:true });

const model = mongoose.model("Post", PostSchema);
module.exports = { model };