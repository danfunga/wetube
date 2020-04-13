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
// async가 중요하다.
export const videoDetail = async (request, response )=> {
    const {
        params:{id}
    }=request;
    try {
        console.log( id );
        const video = await Video.findById( id );
        console.log( video );
        response.render("videoDetail",  {pageTitle:"Video Detail", video} );
    }
    catch ( e ) {
        console.log( e );
        // 에러로 찾지 못하면 home으로 rerouting한다.
        response.redirect(routes.home);
    }

};


export const getEditVideo = async (request, response )=> {
    const{
        params:{id}
    }=request;
    console.log( id );

    try {
        const video = await Video.findById( id );
        response.render("editVideo", {pageTitle:`Edit ${video.title}`, video} );
    }
    catch ( e ) {
        response.redirect(routes.home);
    }



};

export const postEditVideo = async (request, response) =>{
    const{
        params:{id},
        body:{title, description}
    }=request;
    console.log( id );

    try {
        // _id 로 해줘야 한다.
        const result = await Video.findOneAndUpdate( {_id:id}, {title, description} );
        console.log( result );
        response.redirect(routes.videoDetail(id));
    }
    catch ( e ) {
        response.redirect(routes.home);
    }

};
export const deleteVideo = (request, response )=> response.render("deleteVideo",  {pageTitle:"Delete Video"} );


