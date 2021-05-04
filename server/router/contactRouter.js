const express = require("express");
const router = express.Router();
const mail = require("../controller/contact/mail");

router.post("/emailsend", mail);

module.exports = router;