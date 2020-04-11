import mongoose from "mongoose";

let Schema = mongoose.Schema;
// 참고 mongooesjs.com
const VideoSchema = new Schema({
    fileUrl:{
        type: String,
        required: 'File Url is required'
    },
    title:{
        type: String,
        required : "Title is required"
    },
    description : String,
    views:{
        type: Number,
        default: 0
    },
    createAt:{
        type: Date,
        // function 이지만 실행해준다.
        default : Date.now
    },
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]


});

const model = mongoose.model("Video", VideoSchema );
export default model;