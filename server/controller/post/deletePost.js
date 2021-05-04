const { Post } = require("../../model/Post");


const deletePost = async(req, res) => {
    const id = req.params.id
    await Post.findOneAndRemove({ _id: id}).exec((err, result) => {
        if(err){
            res.status(400).json({ success : false , err });
        } else {
            res.status(200).json({ success : true , result});
        }
    });
};

module.exports = deletePost;