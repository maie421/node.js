import routes from "../routes";
import Video from "../models/Video";

export const home=(req,res)=>res.render("home",{pageTitle:"Root",videos});
export const search=(req,res)=>{
    const{
        query:{searchwrd:searchingBy}
    }=req;
    console.log(req.query);
    res.render("video/search",{ pageTitle: "Search",searchingBy,videos});
};

export const video_home = (req, res) => res.render("VIDEO HOME");

export const video_getUpload = (req, res) => res.render("video/video_upload",{ pageTitle: "Upload" });
export const video_postUpload = (req, res) => {
    const {
      body: { file, title, description }
    } = req;
    // To Do : 비디오 저장 및 업로드
    res.redirect(routes.videos_detail(33333));
  };
export const video_detail = (req, res) => res.render("video/video_detail",{ pageTitle: "Video Detail" });
export const edit_video = (req, res) => res.render("video/edit_video",{ pageTitle: "Edit Video" });
export const delete_video = (req, res) => res.render("video/delete_video",{ pageTitle: "Delete Video" });