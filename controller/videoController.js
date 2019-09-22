import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {	
    const videos = await Video.find({});
    console.log(videos);
    res.render("home", { pageTitle: "Root", videos });
  } catch (error) {
    console.log(error);	  
    res.render("home", { pageTitle: "Root", videos: [] });
  }	 
};
export const search=(req,res)=>{
    const{
        query:{searchwrd:searchingBy}
    }=req;
    console.log(req.query);
    res.render("video/search",{ pageTitle: "Search",searchingBy,videos});
};

export const video_home = (req, res) => res.render("VIDEO HOME");

export const video_getUpload = (req, res) => res.render("video/video_upload",{ pageTitle: "Upload" });
export const video_postUpload = async (req, res) => {
  const {	 
    body: {title, description },
    file: { path }
  } = req;
  const newVideo =await Video.create({
    fileUrl:path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videos_detail(newVideo.id));
};
export const video_detail =async (req, res) => {
  const{
    params:{ id }
  }=req;
  try{
    //console.log(req.params);
    const video = await Video.findById(id);
    console.log(video);
    res.render("video/video_detail",{ pageTitle: "Video Detail",video});
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
};
export const edit_video = (req, res) => res.render("video/edit_video",{ pageTitle: "Edit Video" });
export const delete_video = (req, res) => res.render("video/delete_video",{ pageTitle: "Delete Video" });