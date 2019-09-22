import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect("mongodb://localhost:27017/wetube", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const dbConnectionSuccesFn = () => console.log("DB연결에 성공했습니다.");
const dbConnectionFailFn = error =>
  console.log(`DB연결에 실패했습니다. ${error}`);

db.once("open", dbConnectionSuccesFn);
db.on("error", dbConnectionFailFn);