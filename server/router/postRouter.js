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

//글 검색
router.get("/search", searchPost);

//글 목록 및 상세 페이지
router.get("/postDetail/:id", postDetail);
router.post("/postAll", postAll);
router.get("/category/:id", postCategory);

//글 제어
router.post("/uploadImg", uploadImg.single('postImg'), upImg);
router.post("/create", createPost);
router.post("/update/:id", updatePost);
router.delete("/delete/:id", awsDeleteImg, deletePost);

module.exports = router;