const { Post } = require("../../model/Post");
const { Comment} = require("../../model/Comment");
const { Like } = require("../../model/Like");

//게시물 삭제 (minseo)
const deletePost = (req, res) => {
    const postId = req.params.id
    //게시물에 있는 댓글 삭제
    Comment.deleteMany({ "postId" : postId }).exec((err, result) => {
        if(err) {
            throw err
        } else { 
            //게시물에 있는 좋아요기록 삭제
            Like.deleteMany({ "whichPost" : postId}).exec((err, result) => {
                if(err) {
                    throw err
                } else {
                    //게시물 삭제
                    Post.findOneAndDelete({ _id : postId}).exec((err, result) =>{
                        if(err){
                            throw err
                        } else {
                            res.status(200).json({ success : true });
                        };
                    });
                };
            });
        };
    });
}
        // Comment.findOneAndDelete({ "postId" : postId }).exec((err, result) => {
        // if(err) { throw err 
        // } 
        // else {
        //     Like.findOneAndDelete({ "whichPost" : postId }).exec((err, result) => {
        //         if(err) {
        //             throw err
        //         } else {
        //             Post.findOneAndDelete({ _id: postId}).exec((err, result) => {
        //                 if(err) {
        //                     throw err 
        //                 }else {
        //                     res.status(200).json({ success : true });
                        
                    

            
        

module.exports = deletePost;