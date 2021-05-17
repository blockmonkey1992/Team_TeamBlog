const express = require("express");
const router = express.Router();
const { createCommnent } = require("../controller/comment/createComment");


router.post("/create", createCommnent);



module.exports = router;