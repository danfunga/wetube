import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser : true,
        useFindAndModify : false
    }
);

const db = mongoose.connection;
const handleOpen = () => console.log("✅ : connected to db");
const handlerError = error => console.log(`❌ Error on DB connection : ${error}`);
db.once("open", handleOpen);
db.on("error", handlerError);


// export const videos_db = [
//     {
//         id: 1,
//         title: 'videos awesome',
//         description: '어떤 비디오다',
//         views: 2,
//         videosFile: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator: {
//             id: 1221,
//             name: "seungwook",
//             email: "danfunga@gmail.com"
//         }
//     },
//     {
//         id: 2,
//         title: '2nd videos',
//         description: '2번 비디오',
//         views: 13,
//         videosFile: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator: {
//             id: 1221,
//             name: "seungwook",
//             email: "danfunga@gmail.com"
//         }
//     },
//     {
//         id: 3,
//         title: '3rd videos',
//         description: '이게 3번이라네 ',
//         views: 24,
//         videosFile: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator: {
//             id: 1221,
//             name: "seungwook",
//             email: "danfunga@gmail.com"
//         }
//     },
//     {
//         id: 56,
//         title: '4rd videos',
//         description: '이게 4번이라네 ',
//         views: 2334,
//         videosFile: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator: {
//             id: 1221,
//             name: "seungwook",
//             email: "danfunga@gmail.com"
//         }
//     }
//
// ];