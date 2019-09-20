import express from "express";
import routes from "../routes";
import {
  user_home,
  user_detail,
  edit_profile,
  change_password
} from "../controller/userController";

const userRouter = express.Router();

//userRouter.get(routes.home, user_home);
userRouter.get(routes.users_detail, user_detail);
userRouter.get(routes.edit_profile, edit_profile);
userRouter.get(routes.change_password, change_password);

export default userRouter;