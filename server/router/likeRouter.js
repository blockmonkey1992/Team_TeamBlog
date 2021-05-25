const express = require("express");
const router = express.Router();
const { likeController } = require("../controller/like/like");
const { auth } = require("../middleware/auth");

router.get("/:id", auth, likeController);

module.exports = router;