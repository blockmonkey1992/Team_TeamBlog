const express = require("express");
const router = express.Router();
const { getLikeController, likeController } = require("../controller/like/like");
const { auth } = require("../middleware/auth");


router.get("/:id", getLikeController);
router.get("/likeaction/:id", auth, likeController);

module.exports = router;