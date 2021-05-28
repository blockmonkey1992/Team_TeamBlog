const { Comment } = require("../../model/Comment")


const userComment = async(req, res) => {
    const userId = req.user.id;
    await Comment.find(({ "creator" : userId })).populate(postId).exec((err, result) => {
        console.log(result);
        if(err){
            res.status(400).json({ success : false, err })
        } else{
            res.status(200).json({ success : true , result})
        }
    });
};

module.exports = { userComment }