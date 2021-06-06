const { Comment } = require("../../model/Comment");

const deleteComment = (req, res) => {
    const commentId = req.params.id;
    const userId = req.user.id;
    //댓글을 찾는다. 프론트에서 보내온 _id값이 일치하고, creator가 현재 로그인한 유저와 일치하는 것만.
    Comment.find({$and:[{ "_id": commentId }, {"creator" : userId}] }).exec((err, result)=> {
        if(result.length === 0){ //만약 결과값이 없다면 (유저가 일치하지 않는 것에 해당함);
            if(err) return res.status(400).send(err);
            return res.status(403).json({ success: true, msg: "해당 댓글 삭제 권한을 가지고 있지 않은 유저입니다."});
        } else { // 만약 결과값이 존재한다면, 댓글이 존재한다는 것이므로 삭제한다.
            Comment.findOneAndDelete({ "_id" : commentId }).exec((err, deletedComment)=> {
                if(err) return res.status(400).send(err);
                return res.status(200).json({ success: true });
            })
        }
    })
};

module.exports = { deleteComment };