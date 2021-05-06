const { Comment } = require("../../model/Comment");

const createCommnent = (req, res) => {
    const creator = req.user._id;
    const post = req.params.id;
    const contents =req.body.contents;

    Comment.create({ creator, post, contents }, function(err, comment){
        if(err) return res.status(400).json({ success: false, msg: "댓글 생성 실패" });
        return res.status(200).json({ success: true, comment });
    });
}

module.exports = { createCommnent };