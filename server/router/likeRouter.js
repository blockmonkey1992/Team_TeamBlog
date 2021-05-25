const express = require("express");
const router = express.Router();
const { likeController } = require("../controller/like/like");

router.get("/:id", likeController);

module.exports = router;