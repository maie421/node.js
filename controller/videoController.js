import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {	
    const videos = await Video.find({}).sort({_id:-1});
    console.log(videos);
    res.render("home", { pageTitle: "Root", videos });
  } catch (error) {
    console.log(error);	  
    res.render("home", { pageTitle: "Root", videos: [] });
  }	 
};
export const search = async (req, res) => {
  const {
    query: { searchwrd: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  console.log(videos);

  res.render("video/search", { pageTitle: "Search", searchingBy, videos });
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
export const getedit_video =async (req, res) => {
  const{
    params:{ id }
  }=req;
  try{
    const video = await Video.findById(id);
    res.render("video/edit_video",{ pageTitle: `Edit ${video.title}` ,video});
  }catch(error){
    res.render(routes.home);
  }
};
export const postedit_video = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  console.log(id, title, description);
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videos_detail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const delete_video = async(req, res) => {
  const{
    params:{ id }
  }=req;
  try{
    console.log(`삭제 ${id}`);
    await Video.findByIdAndRemove({ _id: id });
    //res.render("video/delete_video",{ pageTitle: "Delete Video" });
  }catch(error){
    res.redirect(routes.home);
  }
};