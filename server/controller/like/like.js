const { Like } = require("../../model/Like");

const likeController = (req, res) => {
    //좋아요 클릭하면, 해당 글 DB에 내 좋아요 데이터가 존재하는지 확인한다.
    const currentUserId = req.user._id;
    const currentPostId = req.params.id;
    Like.find({$and : [{ "likedUser": currentUserId }, { "whichPost" : currentPostId }] }).exec(async(err, result)=>{
        if(err) res.status(400).send(err);
        if(result.length === 0){
            //만약 존재하지 않는다면, DB에 추가한다.
            await Like.create({ "likedUser": currentUserId , "whichPost" : currentPostId })
            res.status(200).json({ success: true });
        } else {
            //존재한다면, DB에서 삭제한다.
            await Like.findOneAndDelete({ "likedUser": currentUserId , "whichPost" : currentPostId }).exec((err, data)=> {
                if(err) res.status(400).send(err);
                res.status(200).json({ success: true });
            });
        };
    });

//     // 상세페이지 좋아요 갯수 출력하기.
//     Like.find({ "whichPost" : currentPostId }).exec(async(err, allLike)=> {
//         const countLike = allLike.length;
//         const currentUser = req.user;
//         if(!currentUser){
//             //좋아요할리가 없는 비로그인 유저.
//         }
//         //내가 좋아요했는지 체킹
//         await allLike.find({"likedUser": currentUser}).exec((err, liked)=> {
//             if(liked.length > 0){
//                 //나는 좋아요한 것임.
                
//             } else {
//                 //좋아요한 적이 없는 것임.
//             }
//         })
//     })
}

module.exports = { likeController };