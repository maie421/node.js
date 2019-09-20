import app from "./app";

const PORT = 3333;

app.listen(PORT, () =>
  console.log(`http://127.0.0.1:${PORT} 경로로 서버 시작!`)
);