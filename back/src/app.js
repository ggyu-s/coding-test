const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = require("../models");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3002, () => {
  console.log("server start");
});
