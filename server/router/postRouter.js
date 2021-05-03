const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const createPost = require("../controller/post/createPost");
const deletePost = require("../controller/post/deletePost");
const updatePost = require("../controller/post/updatePost");



router.post("/create", createPost )

router.post("/update/:id", updatePost )

router.delete("/delete/:id", deletePost  )

module.exports = router;