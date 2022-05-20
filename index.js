require("dotenv").config(); // require dotenv and put all environments in env
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const teacherRouter = require("./routes/teacher.routes");
const userRouter = require("./routes/user.routes");

// database mongoDb connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.error("database not connected"));
 
app.use(express.json());
app.use((req, res, next) => {
  console.log("I am middleware");
  next();
});

// check if environment is development, we dont need morgan in production
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// connecting router
app.use('/home', teacherRouter);
app.use('/user',userRouter);     
app.use((req, res) => {
  return res.status(404).send("not found");
});
// to access variables we created in env, we use a package which is dotenv
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
