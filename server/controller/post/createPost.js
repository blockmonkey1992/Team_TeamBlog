const { Post } = require("../../model/Post");


const createPost = (req, res) => {
    const post = new Post(req.body);
    post.save((err, result) => {
        if(err){
            res.status(400).json({ success : false, err });
        } else {
            res.status(200).json({ success : true , result});
        }
    });
    
};  

module.exports = createPost;