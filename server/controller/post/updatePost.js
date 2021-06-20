const { Post } = require("../../model/Post")


//글 수정 ( minseo )
const updatePost = async (req, res) => {
    const id = req.params.id;
    const title = req.body.title
    const description = req.body.description
    const category = req.body.category
    //글의 고유 id 값을 기준으로 찾은 후 제목, 본문, 카테고리를 변경할 수 있음
    await Post.findByIdAndUpdate({_id: id }, { title, description, category}).exec((err, result) => {
        if(err){
            res.status(400).json({success : false , err});
        } else {
            res.status(200).json({success : true , result});
        }
    });
};


module.exports = updatePost