const { Like } = require("../../model/Like");

// 좋아요 한 글 가져오기 (minseo)
const userLiked = async (req, res) => {
   const userId = req.user.id;
   await Like.find(({ "likedUser" : userId })).populate("whichPost").exec((err, result)=> {
       console.log(result);
    if(err){
        res.status(400).json({ succeed : false , err})
    } else {
        res.status(200).json({ succeed : true , result})
    }
   });
};


module.exports = { userLiked };