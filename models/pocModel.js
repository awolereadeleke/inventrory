import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const pocSchema=new mongoose.Schema({
    POCTitle:StringReq,
    Details:String,
    CreatedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    Client:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Company"
    },
    ServiceID:String,
    From:Date,
    To:Date,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("POC", pocSchema)