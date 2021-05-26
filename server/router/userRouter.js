const express = require("express");
const router = express.Router();
const loginUser = require("../controller/user/loginUser");
const registerUser = require("../controller/user/registerUser");
const logoutUser = require("../controller/user/logoutUser");
const authUser = require("../controller/user/authUser");
const { auth } = require("../middleware/auth");
const { userProfile } = require("../controller/user/profile");

router.get("/auth", auth, authUser);

router.get("/logout", auth, logoutUser);

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/profile", userProfile);




module.exports = router;