const { Comment } = require("../../model/Comment");

//댓글 생성 API (Blockmonkey);
const createComment = (req, res) => {
    const creator = req.user._id;
    const postId = req.params.id;
    const content = req.body.content;
    try{
        Comment.create({ creator, postId, content }, function(err, comment){
            if(err) return res.status(400).json({ success: false, msg: "댓글 생성 실패" });
            return res.status(200).json({ success: true, comment });
        });
    } catch(err) {
        return res.status(400).res.send(err);
    }
};

//댓글의 답글 생성 API (Blockmonkey);
//댓글과 답글의 관계 : refComment(부모 코멘트 id)가 없으며 답글은 refComment(부모 코멘트 id)값이 존재함으로 구분.
const replyComment = (req, res) => {
    const creator = req.user._id;
    const postId = req.params.id;
    const content = req.body.content;
    const refComment = req.body.refComment;
    Comment.create({ creator, postId, content, refComment }, function(err, comment){
        if(err) return res.status(400).json({ success: false, msg: "답글 생성 실패" });
        return res.status(200).json({ success: true, comment });
    })
}

module.exports = { createComment, replyComment };