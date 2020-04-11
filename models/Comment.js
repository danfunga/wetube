import mongoose from "mongoose";

let Schema = mongoose.Schema;
const CommentSchema = new Schema({
    text:{
        type: String,
        required: 'Text is required'
    },
    createAt:{
        type: Date,
        // function 이지만 실행해준다.
        default : Date.now
    },
    video: {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }


});


const model = mongoose.model("Comment", CommentSchema );
export default model;