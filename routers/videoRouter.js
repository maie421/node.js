import express from "express";
import routes from "../routes";
import {
  video_home,
  viewo_upload,
  video_detail,
  edit_video,
  delete_video
} from "../controller/videoController";

const videoRouter = express.Router();
//videoRouter.get(routes.home, video_home);
videoRouter.get(routes.upload, viewo_upload);
videoRouter.get(routes.videos_detail, video_detail);
videoRouter.get(routes.edit_video, edit_video);
videoRouter.get(routes.delete_video, delete_video);

export default videoRouter;