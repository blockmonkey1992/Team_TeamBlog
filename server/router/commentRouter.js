const express = require("express");
const router = express.Router();
const { createCommnent } = require("../controller/comment/createComment");

const { readComment } = require("../controller/comment/readCommnet");
const { auth } = require("../middleware/auth");


router.get("/:id", readComment);
router.post("/create/:id", auth, createCommnent);

module.exports = router;