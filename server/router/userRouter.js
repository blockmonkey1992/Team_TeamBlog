const express = require("express");
const router = express.Router();
const loginUser = require("../controller/user/loginUser");
const registerUser = require("../controller/user/registerUser");
const logoutUser = require("../controller/user/logoutUser");
const authUser = require("../controller/user/authUser");
const { auth } = require("../middleware/auth");
const { updateUser, updatedUser } = require("../controller/user/updateUser");
const { userLiked } = require("../controller/user/like");
const { userComment } = require("../controller/user/comment");
const { overlapEmailCheck, overlapNameCheck } = require("../controller/user/overlapCheck");

//회원관련 API (auth, 로그인 & 아웃, 회원가입, 아이디 & 닉네임 중복확인) (Blockmonkey);
router.get("/auth", auth, authUser);
router.get("/logout", auth, logoutUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/checkemail", overlapEmailCheck);
router.post("/checkname", overlapNameCheck);

//회원정보 관리 API (회원정보 수정, 댓글 남긴 글과 댓글이 남겨진 글 가져오기, 좋아요 누른 글 가져오기) (minseo)
router.post("/profile/:user", auth, updateUser);
router.get("/profile/like/:user", auth, userLiked);
router.get("/profile/comment/:user", auth, userComment);


module.exports = router;