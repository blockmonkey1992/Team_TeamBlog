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

router.get("/auth", auth, authUser);
router.get("/logout", auth, logoutUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/checkemail", overlapEmailCheck);
router.post("/checkname", overlapNameCheck);

router.post("/profile/:user", auth, updateUser);
router.get("/profile/:user", auth, updatedUser);
router.get("/profile/like/:user",auth, userLiked);
router.get("/profile/comment/:user", auth, userComment);





module.exports = router;