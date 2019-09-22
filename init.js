import "./db"
import app from "./app";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT =process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(`http://127.0.0.1:${PORT} 경로로 서버 시작!`)
);