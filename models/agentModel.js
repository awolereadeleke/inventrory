import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const agentSchema= new mongoose.Schema({
    Firstname: StringReq,
    LastName:StringReq,
    Email:StringReq,
    Phone:{
        type:String,
        minLength:7,
        maxLength:20,
    },
    UploadedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
    
})

export default mongoose.model("Agent", agentSchema)