const { Comment } = require("../../model/Comment")

//게시물에 댓글을 달았을 때 그 댓글과 게시물 가져오기 (minseo)
const userComment = async(req, res) => {
    const userId = req.user.id;
    await Comment.find(({ "creator" : userId })).populate("postId").exec((err, result) => {
        if(err){
            res.status(400).json({ success : false, err })
        } else{
            res.status(200).json({ success : true , result})
        }
    });
};

module.exports = { userComment }