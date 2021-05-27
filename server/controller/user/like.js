const { Like } = require("../../model/Like");



const userLiked = async (req, res) => {
   const userId = req.user._id;
   const postId = req.params.id; 
   console.log(userId);
   await Like.find(({ "likedUser" : userId }, { "whichPost" : postId})).exec((err, result)=> {
    if(err){
        res.status(400).json({ succeed : false , err})
    } else {
        res.status(200).json({ succeed : true , result})
    }
   });
};


module.exports = { userLiked };