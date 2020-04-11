import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./localsMiddleware";

import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();


// 보안을 위한 부분
// 순서대로 타기 때ㅜㅁㄴ에 Helmet을 가장 위로
app.use(helmet());
// Middlewares
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));


app.use(localsMiddleware);

// 외부 router를 사용 할 경우 get이 아닌 user를 사용한다.
app.use( routes.home, globalRouter );
app.use( routes.users, userRouter );
app.use( routes.videos, videoRouter );

export default app;