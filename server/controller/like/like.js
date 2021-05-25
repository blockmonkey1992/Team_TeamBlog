const { Like } = require("../../model/Like");

const likeController = (req, res) => {
    //좋아요 클릭하면, DB에 Data가 존재하는지 확인한다.
    const currentUserId = req.user._id;
    const currentPostId = req.params.id;
    const dbData = Like.find({$and : [{ "likedUser": currentUserId }, { "whichPost" : currentPostId }] });
    //만약 존재하지 않는다면, DB에 추가한다.

    //존재한다면, DB에서 삭제한다.
}

module.exports = { likeController };