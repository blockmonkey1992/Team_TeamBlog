const { Post } = require("../../model/Post")



const updatePost = async (req, res) => {
    const id = req.params.id;
    const title = req.body.title
    const description = req.body.description
    const category = req.body.category
    await Post.findByIdAndUpdate({_id: id }, { title, description, category}).exec((err, result) => {
        if(err){
            res.status(400).json({success : false , err});
        } else {
            res.status(200).json({success : true , result});
        }
    });
};


module.exports = updatePost