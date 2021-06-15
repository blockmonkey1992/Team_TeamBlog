const mongoose = require("mongoose");

//MongoDB의 ORM(Object Relational Mapping)인 Mongoose를 활용해 DB연결 (Blockmonkey);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false,
})
  .then(()=> console.log("✅ DB IS CONNECTED..."))
  .catch((err)=> console.log(`😡 DB PROBLEM : ${err}`));