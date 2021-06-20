const { models } = require("mongoose");
const { Post } = require("../../model/Post");

//게시물 상세 페이지 (minseo)
const postDetail = async (req, res) => {
    const id = req.params.id;
       try{ const post = await Post.findById(id)
        //조회수처리
        post.views = post.views + 1;
        post.save();
       res.status(200).json({success : true , post});
       } catch(error) {
       res.status(400).json({success : false , error});
    }
};
// 글 전체 보기 (minseo)
const postAll =  async(req, res) => {
    //페이징처리
        const limit = req.body.limit ? parseInt(req.body.limit) : 6;
        const skip = req.body.skip ? parseInt(req.body.skip) : 0;
        await Post.find()
            //출력물 개수 제한
            .skip(skip)
            .limit(limit)
            //데이터 정렬( 생성된 기준으로 내림차순 )
            .sort({ "updatedAt" : -1 })
            .exec((err, result) => {  
             if(err){
                res.status(400).json({ success : false, err})
            } else {
                res.status(200).json({ success : true , result , postCount : result.length })
            }
        });     
}
//카테고리 찾는 Api (minseo)
const postCategory = async(req, res) => {
    const findcategory = req.params.id;
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