const { models } = require("mongoose");
const { Post } = require("../../model/Post");


const postDetail = async (req, res) => {
    const id = req.params.id;
       try{ const post = await Post.findById(id);
       res.status(200).json({success : true , post});
       } catch(error) {
       res.status(400).json({success : false , error});
  }
};

const postAll =  async(req, res) => {
        const limit = req.body.limit ? parseInt(req.body.limit) : 8;
        const skip = req.body.skip ? parseInt(req.body.skip) : 0;
        console.log(req.body);
        await Post.find().skip(skip).limit(limit).exec((err, result) => {  
            console.log(result.length); 
             if(err){
                res.status(400).json({ success : false, err})
            } else {
                res.status(200).json({ success : true , result  })
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