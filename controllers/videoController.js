// render로 진행할 경우 /views/home.pug를 찾아서 렌더 한다.
import {videos_db} from "../db";
export const home= ( request, response ) => {
    response.render("home", {pageTitle :"Home",videos : videos_db},  )



};

export const search = (request, response )=> {
    // query string이 들어 온다.
    // console.log(request.query);
    // searchingBy
    const { query: { term: searchingBy } } = request;
    // 위에 문장과 같은 내용이다.
    // const seachingBy = request.query.term;

    response.render("search", {pageTitle:"Search", searchingBy } );
    // 키 같을 경우 위처럼 생략 가능하다.
    // response.render("search", {pageTitle:"Search", searchingBy:searchingBy } );
};



export const videos = (request, response ) => response.render("videos",  {pageTitle:"Videos"} );
export const upload = (request, response )=> response.render("upload",  {pageTitle:"Upload"} );
export const videoDetail = (request, response )=> response.render("videoDetail",  {pageTitle:"Video Detail"} );
export const editVideo = (request, response )=> response.render("editVideo", {pageTitle:"Edit Video"} );
export const deleteVideo = (request, response )=> response.render("deleteVideo",  {pageTitle:"Delete Video"} );


