const express = require("express");
const router = express.Router();
const { createComment, replyComment } = require("../controller/comment/createComment");
const { readComment } = require("../controller/comment/readComment");
const { deleteComment } = require("../controller/comment/deleteComment");
const { auth } = require("../middleware/auth");


//Commnet 읽기
router.get("/:id", readComment);
//Commnet 생성
router.post("/create/:id", auth, createComment);
//Commnet 답글
router.post("/createReply/:id", auth, replyComment);
//Commnet 삭제
router.delete("/delete/:id", auth, deleteComment);


module.exports = router;