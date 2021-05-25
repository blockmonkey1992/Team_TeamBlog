const { Post } = require("../../model/Post");


const deletePost = async(req, res) => {
    const id = req.params.id
    try {const result = await Post.findOneAndRemove({ _id: id})
    res.status(200).json({ success : true , result});
    }catch(err) {
        throw err}};

module.exports = deletePost;