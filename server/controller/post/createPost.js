const { Post } = require("../../model/Post");


const createPost = (req, res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description,
        creator : req.body.creator,
        category: req.body.category
    });
    post.save((err, result) => {
        if(err){
            res.status(400).json({ success : false, err });
        } else {
            res.status(200).json({ success : true , result});
        }
    });
    
};  

module.exports = createPost;