import express from "express";
import routes from "../routes";
import {
  video_home,
  video_postUpload,
  video_getUpload,
  video_detail,
  edit_video,
  delete_video
} from "../controller/videoController";

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//videoRouter.get(routes.home, video_home);
videoRouter.get(routes.upload, video_getUpload);
videoRouter.post(routes.upload, uploadVideo,video_postUpload);

videoRouter.get(routes.videos_detail(), video_detail);
videoRouter.get(routes.edit_video, edit_video);
videoRouter.get(routes.delete_video, delete_video);

export default videoRouter;