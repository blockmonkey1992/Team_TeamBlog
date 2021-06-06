const { Comment } = require("../../model/Comment");

const createComment = (req, res) => {
    const creator = req.user._id;
    const postId = req.params.id;
    const content = req.body.content;
    try{
        //댓글생성
        Comment.create({ creator, postId, content }, function(err, comment){
            if(err) return res.status(400).json({ success: false, msg: "댓글 생성 실패" });
            return res.status(200).json({ success: true, comment });
        });
    } catch(err) {
        return res.status(400).res.send(err);
    }
};

const replyComment = (req, res) => {
    const creator = req.user._id;
    const postId = req.params.id;
    const content = req.body.content;
    try{
        if(req.body.refComment){
            //댓글의 댓글을 생성
            Comment.create({ creator, postId, content, refComment }, function(err, comment){
                if(err) return res.status(400).json({ success: false, msg: "답글 생성 실패" });
                return res.status(200).json({ success: true, comment });
            });
        } else {
            return res.status(400).send(err);
        }
    } catch(err){
        return res.status(400).send(err);
    }
}

module.exports = { createComment, replyComment };