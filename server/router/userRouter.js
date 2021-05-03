const express = require("express");
const router = express.Router();
const loginUser = require("../controller/user/loginUser");
const registerUser = require("../controller/user/registerUser");
const logoutUser = require("../controller/user/logoutUser");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

module.exports = router;