const { Comment } = require("../../model/Comment");

const readComment = (req, res) => {
    const postId = req.params.id;
    Comment.find({ postId: postId }).populate("creator").exec((err, result)=> {
        if(err) throw err;
        return res.status(200).json({ success: true , result });
    })
}

module.exports = { readComment };