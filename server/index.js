const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

//몽고 디비 연결
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false,
})
  .then(()=> console.log("✅ DB IS CONNECTED..."))
  .catch((err)=> console.log(`😡 DB PROBLEM : ${err}`));

//기초셋팅
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());



app.use("/api/post", require("./router/postRouter"));

//테스트용 API
app.post("/api/test", (req, res)=> {
    return res.status(200).json({ success : true, test: "hidd ><" });
});

//서버연결확인
app.listen(process.env.PORT, ()=> console.log(`✅ SERVER IS RUNNING AT :${process.env.PORT}`));