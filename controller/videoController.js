export const home=(req,res)=>res.render("home", { pageTitle: "Root" });
export const search=(req,res)=>res.render("video/search",{ pageTitle: "Search" });

export const video_home = (req, res) => res.render("VIDEO HOME");
export const viewo_upload = (req, res) => res.render("video/viewo_upload",{ pageTitle: "Upload" });
export const video_detail = (req, res) => res.render("video/video_detail",{ pageTitle: "Video Detail" });
export const edit_video = (req, res) => res.render("video/edit_video",{ pageTitle: "Edit Video" });
export const delete_video = (req, res) => res.render("video/delete_video",{ pageTitle: "Delete Video" });