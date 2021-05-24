const { Post } = require("../../model/Post");

const createPost = (req, res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description,
        creator : req.body.creator,
        category: req.body.category,
        postImg: req.body.imgUrl
    });
    post.save((err, result) => {
        if(err){
            res.status(400).json({ success : false, err });
        } else {
            res.status(200).json({ success : true , result});
        }
    });
    
};  
const upImg = async(req, res) => {
    const img = req.file.location
    console.log(img)
    res.json({ img });
};

module.exports = { createPost, upImg}