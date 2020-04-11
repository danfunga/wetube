// render로 진행할 경우 /views/home.pug를 찾아서 렌더 한다.
import routes from "../routes";
import Video from "../models/Video"

export const home= async ( request, response ) => {
    try {
        const videos = await Video.find( {} );
        response.render("home", {pageTitle :"Home", videos} )
    } catch ( e ) {
        console.log(e);
        response.render("home", {pageTitle :"Home", videos :[] } )
    }
};

export const search = (request, response )=> {
    // query string이 들어 온다.
    // console.log(request.query);
    // searchingBy
    const { query: { term: searchingBy } } = request;
    // 위에 문장과 같은 내용이다.
    // const seachingBy = request.query.term;

    response.render("search", {pageTitle:"Search", searchingBy ,videos}  )
    // 키 같을 경우 위처럼 생략 가능하다.
    // response.render("search", {pageTitle:"Search", searchingBy:searchingBy } );
};



export const videos = (request, response ) => response.render("videos",  {pageTitle:"Videos"} );
export const getUpload = (request, response )=> response.render("upload",  {pageTitle:"Upload"} );
export const postUpload = async (request, response )=> {
    const {
        body: { title, description},
        file: {path}
    } = request;
    const {body, file} = request;


    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    // console.log(`video : ${video}, title : ${title}, description : ${description} `);
    // todo : upload and save video
    // id를 생성 하고 video Detail로 라우팅 할것이다.
    // response.render("upload", {pageTitle:"Upload"});
    response.redirect(routes.videoDetail(newVideo.id));


};
export const videoDetail = (request, response )=> response.render("videoDetail",  {pageTitle:"Video Detail"} );
export const editVideo = (request, response )=> response.render("editVideo", {pageTitle:"Edit Video"} );
export const deleteVideo = (request, response )=> response.render("deleteVideo",  {pageTitle:"Delete Video"} );


