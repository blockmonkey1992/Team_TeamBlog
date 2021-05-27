const express = require("express");
const router = express.Router();
const loginUser = require("../controller/user/loginUser");
const registerUser = require("../controller/user/registerUser");
const logoutUser = require("../controller/user/logoutUser");
const authUser = require("../controller/user/authUser");
const { auth } = require("../middleware/auth");
const { updateUser, updatedUser } = require("../controller/user/updateUser");
const { userLiked } = require("../controller/user/like");
 
router.get("/auth", auth, authUser);

router.get("/logout", auth, logoutUser);

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/profile/:user", auth, updateUser);
router.get("/profile/:user", auth, updatedUser);

router.get("/profile/:user/like",auth, userLiked);

router.get("/profile/comment/:user");





module.exports = router;