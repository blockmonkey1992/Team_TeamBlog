const { Post } = require("../../model/Post");
const { Comment} = require("../../model/Comment");

const deletePost = async(req, res) => {
    const id = req.params.id
    try { await Post.findOneAndDelete({ _id: id})
           Comment.deleteMany({ "postId" : id })         
    res.status(200).json({ success : true });
    }catch(err) {
        throw err}};

module.exports = deletePost;