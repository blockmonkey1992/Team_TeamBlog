const { Post } = require("../../model/Post");
const { Comment} = require("../../model/Comment");
const { Like } = require("../../model/Like");


const deletePost = (req, res) => {
    const postId = req.params.id
    Comment.deleteMany({ "postId" : postId }).exec((err, result) => {
        if(err) {
            throw err
        } else { 
            Like.deleteMany({ "whichPost" : postId}).exec((err, result) => {
                if(err) {
                    throw err
                } else {
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