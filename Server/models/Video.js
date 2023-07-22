import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    imgUrl:{
        type:String,
        require:true,
    },
    VideoUrl:{
        type:String,
        require:true,
    },
    views:{
        type:Number,
        default:0,
    },
    tags:{
        type:[String],
        default:[],
    },
    likes:{
        type:[String],
        default:[],
    },
    dislikes:{
        type:[String],
        default:[],
    }
    
},{timestamps:true});

export default mongoose.model("Video",VideoSchema);