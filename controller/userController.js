export const join=(req,res)=>res.render("user/join");
export const login=(req,res)=>res.render("user/login");
export const logout =(req,res)=>res.render("user/logout");

//export const user_home = (req, res) => res.render("USER HOME");
export const user_detail = (req, res) => res.render("user/user_detail");
export const edit_profile = (req, res) => res.render("user/edit_profile");
export const change_password = (req, res) => res.render("user/change_password");