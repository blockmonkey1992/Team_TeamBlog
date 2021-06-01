const express = require("express");
const router = express.Router();
const { createComment, replyComment } = require("../controller/comment/createComment");

const { readComment } = require("../controller/comment/readCommnet");
const { auth } = require("../middleware/auth");


router.get("/:id", readComment);
router.post("/create/:id", auth, createComment);
router.post("/createReply/:id", auth, replyComment);

module.exports = router;