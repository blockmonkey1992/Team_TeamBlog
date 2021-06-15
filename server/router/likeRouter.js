const express = require("express");
const router = express.Router();
const { getLikeController, likeController } = require("../controller/like/like");
const { auth } = require("../middleware/auth");

//좋아요 정보 가져오기 & 좋아요 액션 API (Blockmonkey);
router.get("/:id", getLikeController);
router.get("/likeaction/:id", auth, likeController);

module.exports = router;