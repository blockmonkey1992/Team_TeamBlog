const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const {createPost, upImg} = require("../controller/post/createPost");
const deletePost = require("../controller/post/deletePost");
const updatePost = require("../controller/post/updatePost");
const { postDetail, postAll, postCategory } = require("../controller/post/readPost");
const { auth } = require("../middleware/auth");
const { searchPost }  = require("../controller/post/searchPost");
const {uploadImg, awsDeleteImg}  = require("../middleware/image"); 

//게시물 검색 (Blockmonkey);
router.get("/search", searchPost);

//게시물 목록 및 상세 페이지 (minseo)
router.get("/postDetail/:id", postDetail);
router.post("/postAll", postAll);
router.get("/category/:id", postCategory);

//게시물 제어 (minseo)
//이미지 업로드 
router.post("/uploadImg", uploadImg.single('postImg'), upImg);
//게시물 생성
router.post("/create", createPost);
//게시물 수정
router.post("/update/:id", updatePost);
//게시물 삭제( 이미지를 삭제함과 동시에 s3버킷에 있는 이미지 또한 삭제 )
router.delete("/delete/:id", awsDeleteImg, deletePost);

module.exports = router;