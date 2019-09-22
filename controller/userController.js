export const getjoin=(req,res)=>res.render("user/join",{ pageTitle: "Join" });
export const postjoin=(req,res)=>{  
    console.log(req.body);
    const{
        body:{name,email,password,password2}
    }=req;
    if(password!=password2){
        req.status(400);
        res.render("user/join",{pageTitle:"join"});
    }else{
        res.redirect(routes.home);
    }
    res.render("user/join",{ pageTitle: "Join" });
};
export const getlogin=(req,res)=>res.render("user/login",{ pageTitle: "Login" });
export const postlogin=(req,res)=>res.redirect(routes.home);
export const logout =(req,res)=>res.render("user/logout",{ pageTitle: "Logout" });

export const user_home = (req, res) => res.render("USER HOME");
export const user_detail = (req, res) => res.render("user/user_detail",{ pageTitle: "User Detail" });
export const edit_profile = (req, res) => res.render("user/edit_profile",{ pageTitle: "Edit Profile" });
export const change_password = (req, res) => res.render("user/change_password",{ pageTitle: "Change Password" });