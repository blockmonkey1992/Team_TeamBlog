const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const createPost = require("../controller/post/createPost");
const deletePost = require("../controller/post/deletePost");
const updatePost = require("../controller/post/updatePost");
const { postDetail, postAll, postCategory } = require("../controller/post/readPost");
const { auth } = require("../middleware/auth");
const { searchPost }  = require("../controller/post/searchPost");



//글 검색

router.get("/search", searchPost);


//글 목록 및 상세 페이지
router.get("/postDetail/:id", postDetail)
router.get("/postAll", postAll)
router.post("/category/:category", postCategory)

//글 제어
router.post("/create", auth, createPost)
router.post("/update/:id", auth, updatePost)
router.delete("/delete/:id", auth, deletePost)

module.exports = router;