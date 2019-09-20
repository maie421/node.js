import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
const app = express();
const PORT=3333;

// respond with "hello world" when a GET request is made to the homepage

const listeningHandler=()=>{
    console.log(`http://172.0.0.1:${PORT} 서버 시작!`)
}

const homeHandler=(req,res)=>{
    console.log("H Start");
    res.send("H Start");
}
const profileHandler=(req,res)=>{
    console.log("P Start");
    res.send("P Start");
}
const betweenHome = (req, res, next) => {
    console.log("미들웨어 도착");
    // next();
    res.send("접속할 수 없습니다.");
  };

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(morgan("dev"));
  
  app.get("/", betweenHome, homeHandler);
  // app.use(betweenHome);
  app.get("/profile", profileHandler);
  

  app.listen(PORT, listeningHandler);
