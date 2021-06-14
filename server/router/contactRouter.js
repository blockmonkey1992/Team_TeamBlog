const express = require("express");
const router = express.Router();
const mail = require("../controller/contact/mail");

//NodeMailer API
router.post("/emailsend", mail);

module.exports = router;