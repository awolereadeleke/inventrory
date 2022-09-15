import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const pictureSchema=new mongoose.Schema({
    PictureData:StringReq,
    DateUploaded: DateCreated,
    Staff:{type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    }
})

export default mongoose.model("Picture", pictureSchema)