const express = require("express");
const router = express.Router();
const loginUser = require("../controller/user/loginUser");
const registerUser = require("../controller/user/registerUser");
const logoutUser = require("../controller/user/logoutUser");
const authUser = require("../controller/user/authUser");
const { auth } = require("../middleware/auth");


router.get("/auth", auth, authUser);

router.post("/logout", auth, logoutUser);

router.post("/login", loginUser);

router.post("/register", registerUser);




module.exports = router;