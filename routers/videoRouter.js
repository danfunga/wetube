import express from "express";
import routes from "../routes";
import {
    deleteVideo,
    editVideo, getEditVideo,
    getUpload,
    postEditVideo,
    postUpload,
    videoDetail,
    videos
} from "../controllers/videoController";
import { uploadVideo } from "../localsMiddleware";
const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;