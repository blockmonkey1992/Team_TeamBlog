const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./db");

//기초셋팅
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());

//라우팅
app.use("/api/users", require("./router/userRouter"));
app.use("/api/post", require("./router/postRouter"));
app.use("/api/contact", require("./router/contactRouter"));
app.use("/api/comments", require("./router/commentRouter"));
app.use("/api/like", require("./router/likeRouter"));

//서버연결확인
app.listen(process.env.PORT, ()=> console.log(`✅ SERVER IS RUNNING AT :${process.env.PORT}`));