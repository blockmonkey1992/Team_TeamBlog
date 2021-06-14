const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    postImg: {
        type: String
    },
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    creator: {
        type: String,
        required:true
    },
    category: {
        type:Number,
        required:true
    },
}, { timestamps:true });


// const params = {
    
//         Bucket: "minseo-test-1",
//         Key: fileName
// }

// s3.getObject(params, (err, data) => {
//     if(err) {
//         throw err;
//     }
//     let dataURL = 'data:image/jpeg;base64,' + encode(data.Body);
//     const blob = new Blob([data.Body], {
//         type: data.ContentType
//     });
//     const blobURL = URL.createObjectURL(blob);
// });


// // s3.getSignedUrl(
// //     "getObject",
// //     {
// //         Bucket: "minseo-test-1",
// //         Key: "1621833411119.png",
        
// //     },
// //     (err, url) => {
// //         if(err) {
// //             throw err;
// //         }
// //         console.log(url);
// //     }
// // );
const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };

