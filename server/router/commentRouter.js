const express = require("express");
const router = express.Router();
const { createComment } = require("../controller/comment/createComment");


router.post("/create", createComment);



module.exports = router;