import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const storeSchema=new mongoose.Schema({
    StoreName:StringReq,
    Office:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Office"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Store", storeSchema)