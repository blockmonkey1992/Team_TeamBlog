const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const configs = {
    PORT : process.env.PORT || 5000,
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
    GMAIL_MASTER_ID : process.env.GMAIL_MASTER_ID,
    GMAIL_MASTER_PASSWORD : process.env.GMAIL_MASTER_PASSWORD
}
module.exports = { configs };
const db = require("./db");

//기초셋팅
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//라우팅
app.use("/api/users", require("./router/userRouter"));
app.use("/api/post", require("./router/postRouter"));
app.use("/api/contact", require("./router/contactRouter"));
app.use("/api/comments", require("./router/commentRouter"));
app.use("/api/like", require("./router/likeRouter"));

//서버연결확인
app.listen(configs.PORT, ()=> console.log(`✅ SERVER IS RUNNING AT :${process.env.PORT}`));