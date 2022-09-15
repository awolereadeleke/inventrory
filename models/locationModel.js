import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const locationSchema=new mongoose.Schema({
    LocationName:StringReq,
    LocationType:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"LocationType"
    },
    LocationRefID:String,
    Details:String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Location", locationSchema)