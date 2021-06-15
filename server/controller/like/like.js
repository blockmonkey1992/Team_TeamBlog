const { Like } = require("../../model/Like");

//Like(좋아요) 정보 가져오기 API (Blockmonkey);
const getLikeController = (req, res) => {
    const currentPostId = req.params.id || req.body.whichPost;
    Like.find(({ "whichPost" : currentPostId }))
        .exec((err, liked)=> {
            if(err) res.status(400).json({ success: false });
            res.status(200).json({ success: true, liked });
        });
};


//Like(좋아요) 액션 API (Blockmonkey);
const likeController = (req, res) => {
    //좋아요 클릭하면, 해당 글 DB에 내 좋아요 데이터가 존재하는지 확인한다.
    const currentUserId = req.user._id;
    const currentPostId = req.params.id;
    Like.find({$and : [{ "likedUser": currentUserId }, { "whichPost" : currentPostId }] }).exec(async(err, result)=>{
        if(err) res.status(400).send(err);
        if(result.length === 0){
            //만약 존재하지 않는다면, DB에 추가한다.
            await Like.create({ "likedUser": currentUserId , "whichPost" : currentPostId })
            res.status(200).json({ addLikeSuccess: true });
        } else {
            //존재한다면, DB에서 삭제한다.
            await Like.findOneAndDelete({ "likedUser": currentUserId , "whichPost" : currentPostId }).exec((err, data)=> {
                if(err) res.status(400).send(err);
                res.status(200).json({ delLikeSuccess: true });
            });
        };
    });
};

module.exports = { getLikeController, likeController };