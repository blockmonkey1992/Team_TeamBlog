const { models } = require("mongoose");
const { Post } = require("../../model/Post");


const postDetail = async (req, res) => {
    const id = req.params.id;
    console.log(id);
       try{ const post = await Post.findById(id);
       res.status(200).json({success : true , post});
}      catch(error) {
       res.status(400).json({success : false , error});
  }
};

const postAll = async (req, res) => {
        await Post.find().exec((err, result) => {
        if(err){
            res.status(400).json({ success : false, err})
        } else {
            console.log(result);
            res.status(200).json({ success : true , result})
        }
    });    
}

const postCategory = async(req, res) => {
    const findcategory = req.query.id;
    await Post.find({ category : findcategory }).exec((err, result) => {
        if(err){
            res.status(400).json({ success:false , err})
        } else {
            res.status(200).json({ success : true, result})
        }
    });
}




//글 상세 

// route.get("/post/detail/:id", (req, res) => {
//     res.send(req.query.id);
// })

module.exports = { postDetail , postAll, postCategory}