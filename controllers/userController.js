import routes from "../routes";

export const getJoin= ( request, response )=> {


    response.render("join",  {pageTitle:"Join"} );
};

export const postJoin= ( request, response )=> {
    const { body: { name, email, password, password2 } }=request;
    if( password !==password2 ){
        response.status(400);
        response.render("join",  {pageTitle:"Join"} );
    }else{
        // todo Register User
        // login User id
        response.redirect(routes.home);
    }
};
export const getLogin = (request, response )=> response.render("login",  {pageTitle:"login"} );

export const postLogin = (request, response )=> {
    const { body : {email, password} } =request;
    response.redirect(routes.home);
};
export const logout = (request, response )=> {

    // response.render("logout",  {pageTitle:"Logout"} );
    //Process Logout
    response.redirect(routes.home);
};

export const users = (request, response )=> response.render("users",  {pageTitle:"Users"} );
export const userDetail = (request, response )=> response.render("userDetail",  {pageTitle:"User Detail"} );
export const editProfile = (request, response )=> response.render("editProfile",  {pageTitle:"Edit Videos"} );
export const changePassword = (request, response )=> response.render("changePassword",  {pageTitle:"Change Password"} );
