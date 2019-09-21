import express from "express";
import routes from "../routes";
import {home,search} from "../controller/videoController";
import {login,logout} from "../controller/userController"

const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.search,search);
globalRouter.get(routes.login,login);
globalRouter.get(routes.join,(req,res)=>res.send("join"));
globalRouter.get(routes.logout,logout);

export default globalRouter;