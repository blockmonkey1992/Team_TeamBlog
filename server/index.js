const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/test", (req, res)=> {
    return res.status(200).json({ success : true, test: "hiddd ><" });
});

app.listen(process.env.PORT, ()=> console.log(`✅ SERVER IS RUNNING AT :${process.env.PORT}`));