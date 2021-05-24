const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../../config/s3.json');
const { Post } = require('../model/Post');
// 객체 생성후 s3에 담기
const s3 = new aws.S3();

// 물터를 이용한 이미지 업로드 
const uploadImg = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'minseo-test-1',
        acl: 'public-read',
    })
});

//이미지 삭제
const awsDeleteImg = async (req, res, next) => {
    const id = req.params.id;
    const img = await Post.findById(id);
    const url = img.fileUrl.split('/');
    const delImg = url[url.length - 1]
    const params = {
        Bucket: 'minseo-test-1',
        Key: delImg
    }
    s3.deleteObject(params, (err, data) => {
        if(err) {
            res.json({ imgSuccess : false , err})
            console.log(err, err.stack)
        }else {
            res.json({ imgSuccess : true, data})
        }
    })
    next();
}

module.exports = {uploadImg, awsDeleteImg};