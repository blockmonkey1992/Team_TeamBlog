const { Post } = require("../../model/Post");
const { Comment} = require("../../model/Comment");
const { Like } = require("../../model/Like");


const deletePost = async(req, res) => {
    const id = req.params.id
    try { await Post.findOneAndDelete({ _id: id})
           Comment.deleteMany({ "postId" : id })
            Like.deleteMany({ "whichPost" : id})
    res.status(200).json({ success : true });
    }catch(err) {
        throw err}};

module.exports = deletePost;