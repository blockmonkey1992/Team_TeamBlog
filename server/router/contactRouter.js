const express = require("express");
const router = express.Router();
const mail = require("../controller/contact/mail");

//NodeMailer API (Blockmonkey);
router.post("/emailsend", mail);

module.exports = router;